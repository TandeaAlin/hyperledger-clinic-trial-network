import { Component, OnInit, HostBinding } from '@angular/core';
import { Trial, ProtocolFile, CustomForm } from '../../model/ro.utcluj.clinictrial.trial';
import { TrialVO } from '../../model/ro.utcluj.trial.vo';
import { TrialService } from '../../service/trial.service';
import { ResearchSiteService } from '../../service/research-site.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FileVO } from '../../model/ro.utcluj.vo'
import { IdProviderService } from '../../utils/id-provider.service'
import { ProtocolFileService } from '../../service/ProtocolFile.service';
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observable } from "rxjs/Observable";
import { FilesQueryService } from "../../service/queries/files-query-service";
import { FormQueryService } from '../../service/queries/forms-query-service';
import { PatientService } from '../../service/patient.service'
import { PatientQueryService } from '../../service/queries/patient-query-service'
import * as FileSaver from 'file-saver';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { LoaderService } from '../../components/loader/loader.service';


@Component({
    selector: 'trial-view-component',
    templateUrl: 'trial-view.component.html',
    styleUrls: ['./trial-view.component.scss']
})
export class TrialViewComponent implements OnInit {
    //disable some annoying animations
    @HostBinding('@.disabled')
    navigationSubscription;

    //id for the user selected trial
    private idTrial: string;
    trial: Trial = new Trial();
    idTrialLoaded = false;

    //relationship string;
    trialRelation;

    //for protcol uploading
    selectedFile;
    fileToUpload: File = null;
    uploadCardActivate = false;
    fileSize;
    protocolFile = new FileVO();
    formBuilder = false;
    patientSelect = false;

    editMode = false;


    fileColumns = ['FileID', 'FileDate', 'Download', 'Delete'];
    customFormColumns = ['FormName', 'LastModified', 'Edit', 'Delete'];
    patientColumns = ['PatientID', 'Name', 'View', 'Remove'];
    allFilesDataSource: MatTableDataSource<ProtocolFile>;
    allCustomFormsDataSource: MatTableDataSource<CustomForm>;
    allPatientsDataSource: MatTableDataSource<Patient>;
    selectedForm: CustomForm;
    enableViewForm: boolean = false;


    constructor(
        private _trialService: TrialService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _idProvider: IdProviderService,
        private _protocolService: ProtocolFileService,
        private _fileQueryService: FilesQueryService,
        private _formQueryService: FormQueryService,
        private _loaderService: LoaderService
    ) {
        
        this.navigationSubscription = this._router.events.subscribe((e: any) => {
            this._loaderService.show();
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                console.log("loading table data....")
                //reset the tab components
                this.formBuilder = false;
                this.patientSelect = false;
                this.editMode = false;
                this.uploadCardActivate = false;
                this.enableViewForm = false;
                this.loadTableData();
            }
        });
        var id = this._route.params
            .subscribe(params => {
                this._loaderService.show();
                var id = params['idTrial'];
                this.idTrial = id;
                console.log("Selected trial with ID: " + this.idTrial);
                if (!id) {
                    alert("Something went wrong! Please try again!")
                }

                this.loadTableData();
                this.idTrialLoaded = true;
            })

    }

    loadTableData() {
        this._trialService.getAsset(this.idTrial)
            .subscribe(
                (res: Trial) => {
                    console.log("Received from server: ");
                    this.trial = res;
                    this.allPatientsDataSource = new MatTableDataSource<Patient>(res.participants);
                    console.log(this.trial);
                    this._loaderService.hide();
                }
            )
        this._fileQueryService.findFileByTrial(this.idTrial)
            .subscribe(
                (res) => {
                    console.log(res);
                    this.allFilesDataSource = new MatTableDataSource<ProtocolFile>(res);
                }
            )
        this._formQueryService.findCustomFormsByTrial(this.idTrial)
            .subscribe(
                (res) => {
                    console.log(res)
                    this.allCustomFormsDataSource = new MatTableDataSource<CustomForm>(res);
                }
            )
    }

    displayFormBuilder() {
        this.formBuilder = true;
    }
    hideFormBuilder() {
        this.formBuilder = false;
    }

    viewForm(form: CustomForm) {
        this.selectedForm = form;
        this.enableViewForm = true
    }

    hideForm(){
        this.selectedForm = null;
        this.enableViewForm = false;
    }



    patientSelection() {
        console.log(this.idTrial)
        this.patientSelect = true;

    }
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        console.log("File selected by user: ");
        console.log(this.fileToUpload);

        //var base64content = text.substr(text.indexOf(',') + 1)
        var obs = this.readFile(this.fileToUpload);
        obs.subscribe(
            (res) => {
                var fileExtension = this.getFileExtension(this.fileToUpload.name);
                var date = new Date();
                var timestamp = date.toLocaleDateString();
                console.log("File extension is: " + fileExtension);
                this.fileSize = this.transform(this.fileToUpload.size);
                console.log("File size is : " + this.fileSize);
                this.uploadCardActivate = true;
                this.protocolFile.fileID = this._idProvider.generateID();
                this.protocolFile.fileContent = res.toString().substr(res.toString().indexOf(',') + 1);
                this.protocolFile.fileType = fileExtension;
                // this.protocolFile.fileVersion = "";
                this.protocolFile.trial = TrialVO.TRIAL + this.idTrial;
                this.protocolFile.fileTimestamp = this.generateTimestamp();
            }
        );
    }

    public readFile(fileToRead: File): Observable<String> {
        let base64Observable = new ReplaySubject<String>(1);
        let fileReader = new FileReader();
        fileReader.onloadend = event => {
            base64Observable.next(fileReader.result);
        };
        fileReader.readAsDataURL(fileToRead);
        return base64Observable;
    }

    getFileExtension(fileName: string) {
        return fileName.split('.').pop();
    }

    cancelUpload() {
        this.uploadCardActivate = false;
        this.fileToUpload = null;
    }

    generateTimestamp() {
        var date = new Date();
        return date.toLocaleDateString();
    }

    upload() {
       this._loaderService.show();
        console.log("Uploading ...");
        console.log(JSON.stringify(this.protocolFile));
        this._protocolService.addAsset(this.protocolFile).subscribe(
            (res) => {
                this._loaderService.hide();
                this._router.navigate([this._router.url])
            }
        )
    }

    downloadFile(file: ProtocolFile) {
        var bin = atob(file.fileContent);
        var byteNumbers = new Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
            byteNumbers[i] = bin.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: 'application/pdf' })

        FileSaver.saveAs(blob, this.trial.studyName + '_' + file.fileTimestamp);
    }

    ngOnInit() {

    }
    private units = [
        'bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB'
    ];
    transform(bytes: number = 0, precision: number = 2): string {
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '?';

        let unit = 0;

        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }

        return bytes.toFixed(+ precision) + ' ' + this.units[unit];
    }

    onDescriptionChange() {
        var id = this.trial.idTrial;
        this.trial.idTrial = "";
        this._trialService.getAssetUnresolved(id).subscribe(
            (res: Trial) =>{
                res.description = this.trial.description;
                console.log(res);
                this._trialService.updateAsset(res.idTrial, res).subscribe(
                    (result) => {
                        this._router.navigate([this._router.url])
                    },
                    (err)=>{
                        this._router.navigate([this._router.url])
                    }
                )

            }
        )

    }
}