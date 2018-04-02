'use strict';
function registerTrialTransaction(trialRequest){
    var factory = getFactory();
    var namespace_trial = 'ro.utcluj.clinictrial.trial'
    var namespace_person = 'ro.utcluj.clinictrial.base'

    var trial = factory.newResource(namespace_trial, 'Trial', trialRequest.idTrial);
    trial.details = trialRequest.details;
    trial.status = 'REGISTERED';

    //add the relationship to the Researcher that created the clinic trial
    trial.organiser = factory.newRelationship(namespace_person, 'Researcher',
                            trialRequest.organiser.getIdentifier());

    // save the order
    return getAssetRegistry(trial.getFullyQualifiedType())
            .then(function (assetRegistry) {
                      return assetRegistry.add(trial);
  })
}

function setupMockData(){
    
}
