export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "clientID": "[id]",
    "clientSecret": "[secret]",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "https://alin-tandea.github.io/hyperledger-clinic-trial-network?loggedIn=true",
    "failureRedirect": "/"
  },
   "google": {
        "provider": "google",
        "module": "passport-google-oauth2",
        "clientID": "[id]",
        "clientSecret": "[secret]",
        "authPath": "/auth/google",
        "callbackURL": "/auth/google/callback",
        "scope": "https://www.googleapis.com/auth/plus.login",
        "successRedirect": "https://alin-tandea.github.io/hyperledger-clinic-trial-network?loggedIn=true",
        "failureRedirect": "/"
    }
}'

export COMPOSER_DATASOURCES='{
    "db": {
        "name": "mydb",
        "connector": "mongodb",
        "database": "mydb",
        "host": "localhost"
    }
}'


composer-rest-server -c admin@clinic-trial-network -n never -m true