'use strict';

/**
 * Register a new trial, add the required relationships and set the trial status
 * @param {ro.utcluj.clinictrial.trial.RegisterTrialTransaction} tx - Transaction
 * to be processed
 * @transaction
 */
async function registerTrialTransaction(tx) {
  console.log('Registering a new clinical study...')
  console.log('Parameters..')
  console.log(tx)
  const factory = getFactory();
  const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
  const NS_BASE = 'ro.utcluj.clinictrial.base';
  const NS_ORG = 'ro.utcluj.clinictrial.organisation';
  console.log('Creating new trial asset with ID = ' + tx.idTrial)
  var trial = factory.newResource(NS_TRIAL, 'Trial', tx.idTrial);
  console.log('Filling trial asset with info')
  trial.studyName = tx.studyName;
  trial.status = 'REGISTERED';
  console.log('Building relations...')
  trial.organiser = factory.newRelationship(NS_ORG, 'ResearchSite', tx.organiser.idResearchSite);
  if (!trial.responsibles) {
    trial.responsibles = [];
  }
  for (let res in tx.responsibles) {
    console.log(res);
    trial.responsibles
      .push(factory
        .newRelationship(NS_BASE, 'Researcher', tx.responsibles[res].idResearcher));
  }

  if (!trial.sponsors) {
    trial.sponsors = [];
  }

  for (let spon in tx.sponsors) {
    trial.sponsors
      .push(
        factory
          .newRelationship(NS_ORG, 'SupplyOrganisation', tx.sponsors[spon].idSupplyOrganisation))

  }
  console.log('Adding trial to asset registry');
  const registry = await getAssetRegistry(trial.getFullyQualifiedType());
  await registry.add(trial);
  event = factory.newEvent(NS_TRIAL, 'RegisterTrialEvent');
  event.idTrial = trial.idTrial;
  event.studyName = trial.studyName;

  emit(event);
}

/**
 * Enrols a patient into a clinical trial
 * @param {ro.utcluj.clinictrial.trial.EnrolPatientTransaction} tx - contains the 
 * patient id and trial id
 * @transaction
 */
async function enrolPatientTransaction(tx) {
  console.log('Enroling patient into clinic trial .....');
  console.log('Transaction parameter');
  console.log(tx);
  const factory = getFactory();
  //namespace for transaction
  const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
  const NS_BASE = 'ro.utcluj.clinictrial.base';
  let trial = tx.trial;
  let patient = tx.patient;
  //get the asset registries
  console.log("Building relations...");
  let patientRelation = factory.newRelationship(NS_BASE, 'Patient', patient.idPatient);
  if (!trial.participants) {
    trial.participants = [];
  }
  trial.participants.push(patientRelation);
  //update the asset registry
  const trialRegistry = await getAssetRegistry(trial.getFullyQualifiedType());
  await trialRegistry.update(trial);
  event = factory.newEvent(NS_TRIAL, 'EnrolPatientEvent');
  event.patient = patient;
  event.trial = trial;
  emit(event);
}

/**
 * Removes one responsible from a specified clinical trial
 * @param {ro.utcluj.clinictrial.trial.RemoveResearcherFromTrial} tx 
 * @transaction
 */
async function removeResearcherFromTrial(tx) {
  console.log('Removing researcher from trial...');
  console.log(tx)
  const factory = getFactory();
  //namespace for transaction
  const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
  let trial = tx.trial;
  let researcher = tx.researcher;
  console.log('Finding researcher in the responsibles list...')
  for (let index in trial.responsibles) {
    if (trial.responsibles[index].idResearcher == researcher.idResearcher) {
      trial.responsibles.splice(index, 1);
    }
  }
  console.log('Updating trial ...');
  const registry = await getAssetRegistry(trial.getFullyQualifiedType());
  await registry.update(trial);
  event = factory.newEvent(NS_TRIAL, 'RemoveResearcherEvent');
  event.researcher = researcher;
  event.trial = trial;
  emit(event);
}

/**
 * Adds a Researcher as responsible for a clinical trial
 * @param {ro.utcluj.clinictrial.trial.AddResearcherToTrial} tx 
 * @transaction
 */
async function addResearcherToTrial(tx) {
  console.log('Adding researcher to the responsibles list...');
  //namespace for transaction
  const factory = getFactory();
  const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
  const NS_BASE = 'ro.utcluj.clinictrial.base';
  let trial = tx.trial;
  let researcher = tx.researcher;
  //check for duplicates
  for (let index in trial.responsibles) {
    if (trial.responsibles[index].idResearcher == researcher.idResearcher) {
      throw new Error('Duplicate entry');
    }
  }
  trial.responsibles
    .push(factory
      .newRelationship(NS_BASE, 'Researcher', researcher.idResearcher));
  console.log('Updating trial ...');
  const registry = await getAssetRegistry(trial.getFullyQualifiedType());
  await registry.update(trial);
  event = factory.newEvent(NS_TRIAL, 'AddResearcherEvent');
  event.researcher = researcher;
  event.trial = trial;
  emit(event);

}

/**
 * Adds a Researcher as responsible for a clinical trial
 * @param {ro.utcluj.clinictrial.trial.AddFormData} tx 
 * @transaction
 */
async function addFormData(tx) {
  console.log('Adding new colected date');
  //namespace for transaction
  const factory = getFactory();
  const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
  const NS_BASE = 'ro.utcluj.clinictrial.base';
  let id = tx.idFormData;
  let meta = tx.formMeta;
  let patient = tx.patient;
  let customForm = tx.customForm;
  console.log("Creating resources and relationships...");
  var target = factory.newResource(NS_TRIAL, 'FormValue', id);
  target.date = new Date().toLocaleDateString();
  target.time = new Date().toLocaleTimeString();
  target.formMeta = meta;
  target.patient = factory.newRelationship(NS_BASE, 'Patient', patient.idPatient);
  target.customForm = factory.newRelationship(NS_TRIAL, 'CustomForm', customForm.idForm);
  console.log('Adding asset to registry ...');
  const registry = await getAssetRegistry(target.getFullyQualifiedType());
  await registry.add(target);
  event = factory.newEvent(NS_TRIAL, 'AddFormDataEvent');
  event.idFormData = id;
  event.formMeta = meta;
  event.patient = patient;
  event.customForm = customForm;
  emit(event);
}
/**
 * Adds a Researcher as responsible for a clinical trial
 * @param {ro.utcluj.clinictrial.trial.CreateCustomForm} tx 
 * @transaction
 */
async function createCustomForm(tx) {
  console.log('Adding new custom form');
  //namespace for transaction
  const factory = getFactory();
  const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
  const NS_BASE = 'ro.utcluj.clinictrial.base';
  var target = factory.newResource(NS_TRIAL, 'CustomForm', tx.idForm);
  target.idForm = tx.idForm;
  target.name = tx.name;
  target.dateCreated = tx.dateCreated;
  target.formMeta = tx.formMeta;
  let trial = tx.trial;
  target.trial = factory.newRelationship(NS_TRIAL, 'Trial', trial.idTrial);
  const registry = await getAssetRegistry(target.getFullyQualifiedType());
  await registry.add(target);
  event = factory.newEvent(NS_TRIAL, 'CreateCustomFormEvent');
  event.form = target;
  event.trial = trial;
  emit(event);
}

/**
 * Resolves all responsible relations from a trial
 * @param {ro.utcluj.clinictrial.trial.GetResponsibles} tx 
 * @returns {ro.utcluj.clinictrial.base.Researcher[]} All the responsibles.
 * @transaction
 */
async function getResponsibles(tx) {
  let trial = tx.trial;
  console.log(trial);
  const NS_BASE = 'ro.utcluj.clinictrial.base';
  let registry = await getParticipantRegistry(NS_BASE + '.Researcher');
  let responsibles = [];
  let res = [];
  responsibles = trial.responsibles;
  for (const participant of responsibles) {
    registry.get(participant.getIdentifier()).
      then(
        (result) => {
          res.push(result);
        }
      )

  }
  console.log(res);
  return res;
}

