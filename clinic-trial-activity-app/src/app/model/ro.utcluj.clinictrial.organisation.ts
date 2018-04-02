import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Address} from './ro.utcluj.clinictrial.base';
// export namespace ro.utcluj.clinictrial.organisation{
   export abstract class Organisation extends Participant {
      name: string;
      orgAddress: Address;
   }
   export class ResearchSite extends Organisation {
      idResearchSite: string;
   }
// }
