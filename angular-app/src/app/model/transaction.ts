import { Transaction } from './org.hyperledger.composer.system';
import { Researcher } from './ro.utcluj.clinictrial.base';
import { ResearchSite } from './ro.utcluj.clinictrial.organisation';
export class EnrolPatientTransaction extends Transaction {
    patient: string;
    trial: string;
}
export class RemoveResearcherFromTrial extends Transaction {
    trial: string;
    researcher: string;
}
export class AddResearcherToTrial extends Transaction {
    trial: string;
    researcher: string;
}
export class SetupMockData extends Transaction {
    param: string;
}
export class RegisterTrialTransaction extends Transaction {
    idTrial: string;
    studyName: string;
    organiser: ResearchSite;
    responsibles: Researcher[];
}