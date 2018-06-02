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
  console.log('Adding trial to asset registry');
  const registry = await getAssetRegistry(trial.getFullyQualifiedType());
  await registry.add(trial);
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
  patient.trial = factory.newRelationship(NS_TRIAL, 'Trial', trial.idTrial);
  //update the asset registry
  const patientRegistry = await getAssetRegistry(patient.getFullyQualifiedType());
  await patientRegistry.update(patient);
}

/**
 * Removes one responsible from a specified clinical trial
 * @param {ro.utcluj.clinictrial.trial.RemoveResearcherFromTrial} tx 
 */
async function removeResearcherFromTrial(tx) {
  console.log('Removing researcher from trial...');
  console.log(tx)
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
}

