import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {ResearchSite,SupplyOrganisation} from './ro.utcluj.clinictrial.organisation';
import {Trial} from './ro.utcluj.clinictrial.trial';
// export namespace ro.utcluj.clinictrial.base{
   export enum Gender {
      MALE,
      FEMALE,
      ALL,
   }
   export class Person {
      firstName: string;
      lastName: string;
      gender: Gender;
      contactDetails: ContactDetails;
      birthDetails: BirthDetails;
      deathDetails: DeathDetails;
   }
   export class ContactDetails {
      email: string;
      mobilePhone: string;
      homePhone: string;
      address: Address;
   }
   export class BirthDetails {
      dateOfBirth: string;
      placeOfBirth: string;
   }
   export class DeathDetails {
      dateOfDeath: string;
      placeOfDeath: string;
   }
   export class Address {
      city: string;
      country: string;
      locality: string;
      region: string;
      street: string;
      postalCode: string;
   }
   export abstract class ParticipantPerson extends Participant {
      person: Person;
   }
   export class Researcher extends ParticipantPerson {
      idResearcher: string;
      employer: ResearchSite;
   }
   export class Supplier extends ParticipantPerson {
      idSupplier: string;
      employer: SupplyOrganisation;
   }
   export class Patient extends Asset {
      idPatient: string;
      person: Person;
      trial: Trial;
   }
// }
