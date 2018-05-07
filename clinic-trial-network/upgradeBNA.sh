composer archive create -t dir -n .
composer network install -a clinic-trial-network@0.0.3.bna -c PeerAdmin@hlfv1
composer network upgrade -c PeerAdmin@hlfv1 -n clinic-trial-network -V 0.0.3
