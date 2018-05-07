import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Patient,Researcher,Address} from './ro.utcluj.clinictrial.base';
import {ResearchSite} from './ro.utcluj.clinictrial.organisation';
// export namespace ro.utcluj.clinictrial.trial{
   export enum TrialStatus {
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
   export class TrialDetails {
      trialTitle: string;
   }
   export class Trial extends Asset {
      idTrial: string;
      protocolEntries: ProtocolEntry[];
      details: TrialDetails;
      status: TrialStatus;
      participants: Patient[];
      organiser: Researcher;
   }
   export class RegisterTrialTransaction extends Transaction {
      idTrial: string;
      details: TrialDetails;
      organiser: Researcher;
   }
   export class ProtocolEntry {
      phase: TrialPhase;
      location: Address;
      protocolContent: string;
      enrollNumber: number;
      startDate: Date;
      endDate: Date;
   }
   export class ProtocolContent {
      ageGroups: AgeGroup[];
      acceptedGenders: Gender;
      acceptsHealthy: boolean;
      conditions: string[];
      interventions: string[];
      researchSites: ResearchSite[];
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
// }
