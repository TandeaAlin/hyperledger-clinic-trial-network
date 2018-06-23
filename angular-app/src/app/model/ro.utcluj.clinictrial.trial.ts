import { Asset } from './org.hyperledger.composer.system';
import { Participant } from './org.hyperledger.composer.system';
import { Transaction } from './org.hyperledger.composer.system';
import { Event } from './org.hyperledger.composer.system';
import { Patient, Researcher } from './ro.utcluj.clinictrial.base';
import { ResearchSite } from './ro.utcluj.clinictrial.organisation';
// export namespace ro.utcluj.clinictrial.trial{
export enum TrialStatus {
    REGISTERED,
    NOT_RECRUITING,
    RECRUITING,
    RECRUITING_INVITATION,
    APPROVED,
    SUSPENDED,
    REJECTED,
    IN_PROGRES,
    FINISHED,
}
export enum TrialPhase {
    PHASE_1,
    PHASE_2,
    PHASE_3,
    PHASE_4,
}
export enum AgeGroup {
    CHILD,
    ADULT,
    SENIOR,
}
export enum Gender {
    MALE,
    FEMALE,
    ALL,
}
export class Trial extends Asset {
    idTrial: string;
    studyName: string;
    status: TrialStatus;
    researchSites: ResearchSite[];
    organiser: ResearchSite;
    participants: Patient[];
    responsibles: Researcher[];
}
export class RegisterTrialTransaction extends Transaction {
    idTrial: string;
    studyName: string;
    status: TrialStatus;
    researchSites: ResearchSite[];
    organiser: ResearchSite;
    participants: Patient[];
    responsibles: Researcher[];
}
export class TableRow {
    cell: string[];
    timestamp: string;
}
export class Crf extends Asset {
    idCrf: string;
    rows: TableRow[];
    columnHeader: string[];
}
export class CustomForm extends Asset {
    idForm: string;
    name: string;
    dateCreated: string;
    formMeta: FormEntry[];
    trial: String;
 }
export enum EntryType {
    FORM_FIELD,
    CHOICE_FIELD,
    SELECTOR_FIELD,
}
export class FormValue extends Asset {
    idFormData: string;
    date: string;
    time: string;
    formMeta: FormEntry[];
    patient: Patient;
    customForm: CustomForm;
 }
 export class FormEntry {
    entryName: string;
    entryType: number;
    entryOptions: string[];
    value: string;
 }
 export class ProtocolFile extends Asset {
    fileID: string;
    fileContent: string;
    fileType: string;
    fileTimestamp: string;
    trial: Trial;
 }
 export class MedicalHistory extends Asset {
    idMedicalHistory: string;
    records: MedicalRecord[];
    patient: Patient;
 }
 export class AddFormData extends Transaction {
    idFormData: string;
    formMeta: FormEntry[];
    patient: String;
    customForm: String;
 }
 export class MedicalRecord {
    recordType: string;
    description: string;
    date: string;
 }
// }
