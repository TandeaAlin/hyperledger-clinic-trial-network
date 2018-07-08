export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "clientID": "23352dfd6e39b8f45e55",
    "clientSecret": "1cd9ef526cd23360ebb80c457881cd1fa560f9c9",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "http://localhost:4200?loggedIn=true",
    "failureRedirect": "/"
  }
}'




composer-rest-server -c admin@clinic-trial-network -n never -m true