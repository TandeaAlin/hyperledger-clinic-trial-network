import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Patient,Researcher} from './ro.utcluj.clinictrial.base';
import {ResearchSite} from './ro.utcluj.clinictrial.organisation';
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
      description: string;
      tasks: TodoElement[];
      status: TrialStatus;
      researchSites: ResearchSite[];
      organiser: ResearchSite;
      participants: Patient[];
      responsibles: Researcher[];
   }
   export class TodoElement {
      taskName: string;
      completed: boolean;
   }
   export class RegisterTrialTransaction extends Transaction {
      idTrial: string;
      studyName: string;
      organiser: string;
      responsibles: string[];
   }
   export class RegisterTrialEvent extends Event {
      idTrial: string;
      studyName: string;
      organiser: ResearchSite;
      responsibles: Researcher[];
   }
   export class TableRow {
      cell: string[];
      timestamp: string;
   }
   export class CustomForm extends Asset {
      idForm: string;
      name: string;
      dateCreated: string;
      formMeta: FormEntry[];
      trial: Trial;
   }
   export class CreateCustomForm extends Transaction {
      idForm: string;
      name: string;
      dateCreated: string;
      formMeta: FormEntry[];
      trial: string;
   }
   export class CreateCustomFormEvent extends Event {
      form: CustomForm;
      trial: Trial;
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
   export class MedicalRecord {
      recordType: string;
      title: string;
      description: string;
      date: string;
   }
   export class EnrolPatientTransaction extends Transaction {
      patient: string;
      trial: string;
   }
   export class EnrolPatientEvent extends Event {
      patient: Patient;
      trial: Trial;
   }
   export class RemoveResearcherFromTrial extends Transaction {
      trial: string;
      researcher: string;
   }
   export class RemoveResearcherEvent extends Event {
      trial: Trial;
      researcher: Researcher;
   }
   export class AddResearcherToTrial extends Transaction {
      trial: string;
      researcher: string;
   }
   export class AddResearcherEvent extends Event {
      trial: Trial;
      researcher: Researcher;
   }
   export class AddFormData extends Transaction {
      idFormData: string;
      formMeta: FormEntry[];
      patient: string;
      customForm: string;
   }
   export class AddFormDataEvent extends Event {
      idFormData: string;
      formMeta: FormEntry[];
      patient: Patient;
      customForm: CustomForm;
   }
   export class GetResponsibles extends Transaction {
      trial: Trial;
   }
   export class SetupMockData extends Transaction {
      param: string;
   }
// }