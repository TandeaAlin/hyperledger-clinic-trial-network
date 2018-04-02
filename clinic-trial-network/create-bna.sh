./fabric-tools/stopFabric.sh
./fabric-tools/teardownFabric.sh
./fabric-tools/startFabric.sh
./fabric-tools/createPeerAdminCard.sh
composer card delete --name admin@clinic-trial-network
composer archive create -t dir -n .
composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName clinic-trial-network
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile clinic-trial-network@0.0.1.bna --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@clinic-trial-network
composer-rest-server -c admin@clinic-trial-network -n never -w true
