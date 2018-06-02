import { Asset } from './org.hyperledger.composer.system';
import { Participant } from './org.hyperledger.composer.system';
import { Transaction } from './org.hyperledger.composer.system';
import { Event } from './org.hyperledger.composer.system';
import { Patient, Researcher } from './ro.utcluj.clinictrial.base';
import { ResearchSite } from './ro.utcluj.clinictrial.organisation';
import { Trial } from './ro.utcluj.clinictrial.trial'
export class EnrolPatientTransaction extends Transaction {
    patient: Patient;
    trial: Trial;
}
export class RemoveResearcherFromTrial extends Transaction {
    trial: Trial;
    researcher: Researcher;
}
export class AddResearcherToTrial extends Transaction {
    trial: Trial;
    researcher: Researcher;
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