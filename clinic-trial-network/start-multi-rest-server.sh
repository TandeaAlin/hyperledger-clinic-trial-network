export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "clientID": "[ID]",
    "clientSecret": "[SECRET]",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "http://localhost:4200?loggedIn=true",
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