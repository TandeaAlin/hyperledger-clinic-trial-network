./fabric-tools/stopFabric.sh
./fabric-tools/teardownFabric.sh
./fabric-tools/startFabric.sh
./fabric-tools/createPeerAdminCard.sh

composer card delete --card admin@clinic-trial-network 

composer archive create -t dir -n .
composer network install --card PeerAdmin@hlfv1 --archiveFile clinic-trial-network@1.2.9.bna
composer network start --networkName clinic-trial-network --networkVersion 1.2.9 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@clinic-trial-network