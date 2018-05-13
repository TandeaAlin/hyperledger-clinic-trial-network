'use strict';

/**
 * Register a new trial, add the required relationships and set the trial status
 * @param {ro.utcluj.clinictrial.trial.RegisterTrialTransaction} tx - Transaction
 * to be processed
 * @transaction
 */
async function registerTrialTransaction(tx) {
  console.log('Registering a new clinical study...')

  const factory = getFactory();
  const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
  const NS_ORG = 'ro.utcluj.clinictrial.organisation';

  const trial = factory.newResource(NS_TRIAL, 'TRIAL', tx.idTrial);
  trial.studyName = tx.studyName;
  trial.status = 'REGISTERED';
  trial.organiser = factory.newRelationship(NS_ORG, 'ResearchSite', tx.organiser.getIdentifier());
  const registry = await getAssetRegistry(trial.getFullyQualifiedType());
  await registry.add(trial);
}

function setupMockData() {

}
