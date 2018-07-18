./fabric-tools/startFabric.sh
./fabric-tools/createPeerAdminCard.sh

composer card delete --card admin@clinic-trial-network 

composer archive create -t dir -n .
composer network install --card PeerAdmin@hlfv1 --archiveFile clinic-trial-network@1.0.4.bna
composer network start --networkName clinic-trial-network --networkVersion 1.0.4 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@clinic-trial-network