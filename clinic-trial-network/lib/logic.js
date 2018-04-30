'use strict';

/**
 * Register a new trial, add the required relationships and set the trial status
 * @param {ro.utcluj.clinictrial.RegisterTrialTransaction} trialRequest - Transaction
 * to be processed
 * @transaction
 */
function registerTrialTransaction(trialRequest){
    var factory = getFactory();
    //namespace definitions
    var namespace = 'ro.utcluj.clinictrial'


    var trial = factory.newResource(namespace_trial, '.Trial', trialRequest.idTrial);
    trial.details = trialRequest.details;
    trial.status = 'REGISTERED';

    //add the relationship to the Researcher that created the clinic trial
    trial.organiser = factory.newRelationship(namespace_person, '.Researcher',
                            trialRequest.organiser.getIdentifier());

    // save the asset
    return getAssetRegistry(trial.getFullyQualifiedType())
            .then(function (assetRegistry) {
                      return assetRegistry.add(trial);
  })
}
function setupMockData(){

}
