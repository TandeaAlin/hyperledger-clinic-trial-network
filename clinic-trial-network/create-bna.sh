./fabric-tools/stopFabric.sh
./fabric-tools/teardownFabric.sh
./fabric-tools/startFabric.sh
./fabric-tools/createPeerAdminCard.sh

composer card delete --card admin@clinic-trial-network 

composer archive create -t dir -n .
composer network install --card PeerAdmin@hlfv1 --archiveFile clinic-trial-network@0.1.5.bna
composer network start --networkName clinic-trial-network --networkVersion 0.1.5 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@clinic-trial-network