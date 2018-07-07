
/**
 * Initialise the network with mock test data
 * @param {ro.utcluj.clinictrial.trial.SetupMockData} tx
 * @transaction 
 */
async function setupMockData(tx) {
    console.log('Adding mock data...')

    //namespaces
    const NS_ORG = 'ro.utcluj.clinictrial.organisation';
    const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
    const NS_BASE = 'ro.utcluj.clinictrial.base';

    const factory = getFactory();
    const researchSiteRegistry = await getParticipantRegistry(NS_ORG + '.ResearchSite');
    const researcherRegistry = await getParticipantRegistry(NS_BASE + '.Researcher');
    const patientRegistry = await getAssetRegistry(NS_BASE + '.Patient');
    const trialRegistry = await getAssetRegistry(NS_TRIAL + '.Trial');
    //add research sites
    var sites = [
        {
            "$class": "ro.utcluj.clinictrial.organisation.ResearchSite",
            "idResearchSite": "1",
            "name": "IOCN"
        },
        {
            "$class": "ro.utcluj.clinictrial.organisation.ResearchSite",
            "idResearchSite": "2",
            "name": "University of Houston"
        }, 
        {
            "$class": "ro.utcluj.clinictrial.organisation.ResearchSite",
            "idResearchSite": "3",
            "name": "The University of Hong Kong"
        }
    ];

    var researchers = [
        {
            "$class": "ro.utcluj.clinictrial.base.Researcher",
            "idResearcher": "4",
            "employer": "1",
            "person": {
                "$class": "ro.utcluj.clinictrial.base.Person",
                "firstName": "Test",
                "lastName": "Researcher1",
                "gender": "MALE",
                "contactDetails": {
                    "$class": "ro.utcluj.clinictrial.base.ContactDetails",
                    "email": "test@test.com",
                    "mobilePhone": "0744924478",
                    "homePhone": "Aliquip.",
                    "address": {
                        "$class": "ro.utcluj.clinictrial.base.Address",
                        "city": "city",
                        "country": "country",
                        "locality": "Incididunt deserunt.",
                        "region": "region",
                        "street": "street",
                        "postalCode": "Nostrud."
                    }
                },
                "birthDetails": {
                    "$class": "ro.utcluj.clinictrial.base.BirthDetails",
                    "dateOfBirth": "2018-06-02T12:56:36.938Z",
                    "placeOfBirth": "test place"
                },
                "deathDetails": {
                    "$class": "ro.utcluj.clinictrial.base.DeathDetails",
                    "dateOfDeath": "2018-06-02T12:56:36.938Z",
                    "placeOfDeath": "Ullamco elit."
                }
            }
        },
        {
            "$class": "ro.utcluj.clinictrial.base.Researcher",
            "idResearcher": "5",
            "employer": "2",
            "person": {
                "$class": "ro.utcluj.clinictrial.base.Person",
                "firstName": "Eiusmod veniam laboris.",
                "lastName": "Consequat non consequat est.",
                "gender": "MALE",
                "contactDetails": {
                    "$class": "ro.utcluj.clinictrial.base.ContactDetails",
                    "email": "Adipisicing amet cillum esse irure.",
                    "mobilePhone": "Fugiat qui mollit aliqua.",
                    "homePhone": "Aliquip.",
                    "address": {
                        "$class": "ro.utcluj.clinictrial.base.Address",
                        "city": "Aute nisi labore.",
                        "country": "Fugiat duis mollit culpa ullamco.",
                        "locality": "Incididunt deserunt.",
                        "region": "Aute deserunt esse officia.",
                        "street": "Enim quis qui labore veniam.",
                        "postalCode": "Nostrud."
                    }
                },
                "birthDetails": {
                    "$class": "ro.utcluj.clinictrial.base.BirthDetails",
                    "dateOfBirth": "2018-06-02T12:56:36.938Z",
                    "placeOfBirth": "Adipisicing cillum commodo."
                },
                "deathDetails": {
                    "$class": "ro.utcluj.clinictrial.base.DeathDetails",
                    "dateOfDeath": "2018-06-02T12:56:36.938Z",
                    "placeOfDeath": "Ullamco elit."
                }
            }
        },
        {
            "$class": "ro.utcluj.clinictrial.base.Researcher",
            "idResearcher": "6",
            "employer": "3",
            "person": {
                "$class": "ro.utcluj.clinictrial.base.Person",
                "firstName": "Eiusmod veniam laboris.",
                "lastName": "Consequat non consequat est.",
                "gender": "MALE",
                "contactDetails": {
                    "$class": "ro.utcluj.clinictrial.base.ContactDetails",
                    "email": "Adipisicing amet cillum esse irure.",
                    "mobilePhone": "Fugiat qui mollit aliqua.",
                    "homePhone": "Aliquip.",
                    "address": {
                        "$class": "ro.utcluj.clinictrial.base.Address",
                        "city": "Aute nisi labore.",
                        "country": "Fugiat duis mollit culpa ullamco.",
                        "locality": "Incididunt deserunt.",
                        "region": "Aute deserunt esse officia.",
                        "street": "Enim quis qui labore veniam.",
                        "postalCode": "Nostrud."
                    }
                },
                "birthDetails": {
                    "$class": "ro.utcluj.clinictrial.base.BirthDetails",
                    "dateOfBirth": "2018-06-02T12:56:36.938Z",
                    "placeOfBirth": "Adipisicing cillum commodo."
                },
                "deathDetails": {
                    "$class": "ro.utcluj.clinictrial.base.DeathDetails",
                    "dateOfDeath": "2018-06-02T12:56:36.938Z",
                    "placeOfDeath": "Ullamco elit."
                }
            }
        }
    ];

    var patients = [
        {
            "$class": "ro.utcluj.clinictrial.base.Patient",
            "idPatient": "7",
            "person": {
                "$class": "ro.utcluj.clinictrial.base.Person",
                "firstName": "Est ipsum laborum id aliqua.",
                "lastName": "Elit.",
                "gender": "MALE",
                "contactDetails": {
                    "$class": "ro.utcluj.clinictrial.base.ContactDetails",
                    "email": "Esse dolor.",
                    "mobilePhone": "Nostrud occaecat cillum labore.",
                    "homePhone": "Ipsum velit sit.",
                    "address": {
                        "$class": "ro.utcluj.clinictrial.base.Address",
                        "city": "Qui anim.",
                        "country": "Aute.",
                        "locality": "Mollit incididunt.",
                        "region": "Et esse aliqua nulla.",
                        "street": "Laborum.",
                        "postalCode": "Elit."
                    }
                },
                "birthDetails": {
                    "$class": "ro.utcluj.clinictrial.base.BirthDetails",
                    "dateOfBirth": "Cillum.",
                    "placeOfBirth": "Occaecat ut."
                },
                "deathDetails": {
                    "$class": "ro.utcluj.clinictrial.base.DeathDetails",
                    "dateOfDeath": "Esse proident esse eu.",
                    "placeOfDeath": "Consectetur ipsum non quis."
                }
            }
        },
        {
            "$class": "ro.utcluj.clinictrial.base.Patient",
            "idPatient": "8",
            "person": {
                "$class": "ro.utcluj.clinictrial.base.Person",
                "firstName": "Est ipsum laborum id aliqua.",
                "lastName": "Elit.",
                "gender": "MALE",
                "contactDetails": {
                    "$class": "ro.utcluj.clinictrial.base.ContactDetails",
                    "email": "Esse dolor.",
                    "mobilePhone": "Nostrud occaecat cillum labore.",
                    "homePhone": "Ipsum velit sit.",
                    "address": {
                        "$class": "ro.utcluj.clinictrial.base.Address",
                        "city": "Qui anim.",
                        "country": "Aute.",
                        "locality": "Mollit incididunt.",
                        "region": "Et esse aliqua nulla.",
                        "street": "Laborum.",
                        "postalCode": "Elit."
                    }
                },
                "birthDetails": {
                    "$class": "ro.utcluj.clinictrial.base.BirthDetails",
                    "dateOfBirth": "Cillum.",
                    "placeOfBirth": "Occaecat ut."
                },
                "deathDetails": {
                    "$class": "ro.utcluj.clinictrial.base.DeathDetails",
                    "dateOfDeath": "Esse proident esse eu.",
                    "placeOfDeath": "Consectetur ipsum non quis."
                }
            }
        },
        {
            "$class": "ro.utcluj.clinictrial.base.Patient",
            "idPatient": "9",
            "person": {
                "$class": "ro.utcluj.clinictrial.base.Person",
                "firstName": "Est ipsum laborum id aliqua.",
                "lastName": "Elit.",
                "gender": "MALE",
                "contactDetails": {
                    "$class": "ro.utcluj.clinictrial.base.ContactDetails",
                    "email": "Esse dolor.",
                    "mobilePhone": "Nostrud occaecat cillum labore.",
                    "homePhone": "Ipsum velit sit.",
                    "address": {
                        "$class": "ro.utcluj.clinictrial.base.Address",
                        "city": "Qui anim.",
                        "country": "Aute.",
                        "locality": "Mollit incididunt.",
                        "region": "Et esse aliqua nulla.",
                        "street": "Laborum.",
                        "postalCode": "Elit."
                    }
                },
                "birthDetails": {
                    "$class": "ro.utcluj.clinictrial.base.BirthDetails",
                    "dateOfBirth": "Cillum.",
                    "placeOfBirth": "Occaecat ut."
                },
                "deathDetails": {
                    "$class": "ro.utcluj.clinictrial.base.DeathDetails",
                    "dateOfDeath": "Esse proident esse eu.",
                    "placeOfDeath": "Consectetur ipsum non quis."
                }
            },
            "trial": "01"
        }
    ];

    var trials = [
        {
            "$class": "ro.utcluj.clinictrial.trial.Trial",
            "idTrial": "01",
            "studyName": "Bretuximab Vedotin side effects",
            "status": "REGISTERED",
            "description": "Testing trial description",
            "organiser": "1",
            "responsibles": [
                "6"
            ]
        },
        {
            "$class": "ro.utcluj.clinictrial.trial.Trial",
            "idTrial": "02",
            "studyName": "ABVD eficiency",
            "status": "REGISTERED",
            "description": "Testing trial description",
            "organiser": "2",
            "responsibles": [
                "5"
            ]
        }
    ]

    console.log('Adding mock research sites...')
    console.log(sites);
    for (let site of sites) {
        console.log(site);
        var trial = factory.newResource(NS_ORG, 'ResearchSite', site.idResearchSite);
        trial.name = site.name;
        await researchSiteRegistry.add(trial);
    }

    console.log('Adding mock researchers...');
    console.log(researchers)
    for (let res of researchers) {
        var researcher = factory.newResource(NS_BASE, 'Researcher', res.idResearcher);
        copyPerson(researcher, res);
        console.log(researcher);
        await researcherRegistry.add(researcher);
    }

    console.log('Starting clinic trials ....')
    for (let srcTrial of trials) {
        var trial = factory.newResource(NS_TRIAL, 'Trial', srcTrial.idTrial);
        trial.studyName = srcTrial.studyName;
        trial.status = srcTrial.status;
        trial.description = srcTrial.description;
        trial.organiser = factory.newRelationship(NS_ORG, 'ResearchSite', srcTrial.organiser);
        trial.responsibles = [];
        for (let res of srcTrial.responsibles) {
            console.log(res);
            trial.responsibles
                .push(factory
                    .newRelationship(NS_BASE, 'Researcher', res));
        }
        await trialRegistry.add(trial);
    }

    console.log('Adding mock patients...');
    console.log(patients)
    for (let srcPatient of patients) {
        var patient = factory.newResource(NS_BASE, 'Patient', srcPatient.idPatient);
        copyPerson(patient, srcPatient);
        console.log(patient);
        await patientRegistry.add(patient);
    }
}

/**
 * Helper method to copy object field
 * @param {*} target target Person asset
 * @param {*} src mock data source
 */
function copyPerson(target, src) {
    //namespaces
    const NS_ORG = 'ro.utcluj.clinictrial.organisation';
    const NS_TRIAL = 'ro.utcluj.clinictrial.trial';
    const NS_BASE = 'ro.utcluj.clinictrial.base';
    const factory = getFactory();
    target.person = factory.newConcept(NS_BASE, 'Person');
    target.person.birthDetails = factory.newConcept(NS_BASE, 'BirthDetails')
    target.person.deathDetails = factory.newConcept(NS_BASE, 'DeathDetails')
    target.person.contactDetails = factory.newConcept(NS_BASE, 'ContactDetails')
    target.person.contactDetails.address = factory.newConcept(NS_BASE, 'Address');

    target.person.firstName = src.person.firstName;
    target.person.lastName = src.person.lastName;
    target.person.gender = src.person.gender;
    target.person.contactDetails.email = src.person.contactDetails.email;
    target.person.contactDetails.mobilePhone = src.person.contactDetails.phone;
    target.person.birthDetails.dateOfBirth = src.person.birthDetails.dateOfBirth;
    target.person.birthDetails.placeOfBirth = src.person.birthDetails.placeOfBirth;
    target.person.deathDetails.dateOfDeath = src.person.deathDetails.dateOfDeath;
    target.person.deathDetails.placeOfDeath = src.person.deathDetails.placeOfDeath;
    target.person.contactDetails.address.city = src.person.contactDetails.address.city;
    target.person.contactDetails.address.country = src.person.contactDetails.address.country;
    target.person.contactDetails.address.region = src.person.contactDetails.address.region;
    target.person.contactDetails.address.street = src.person.contactDetails.address.street;
}