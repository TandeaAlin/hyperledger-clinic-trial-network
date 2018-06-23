import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {ResearchSite,SupplyOrganisation} from './ro.utcluj.clinictrial.organisation';
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
      dateOfBirth: Date;
      placeOfBirth: string;
   }
   export class DeathDetails {
      dateOfDeath: Date;
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
      employer: string;
   }
   export class Supplier extends ParticipantPerson {
      idSupplier: string;
      employer: SupplyOrganisation;
   }
   export class Patient extends Asset {
      idPatient: string;
      person: Person;
      trial: string;
   }
// }
