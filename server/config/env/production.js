'use strict'

module.exports = {
    db: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/mean-prod',
    /**
     * Database options that will be passed directly to mongoose.connect
     * Below are some examples.
     * See http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options
     * and http://mongoosejs.com/docs/connections.html for more information
     */
    dbOptions: {
        /*
        server: {
            socketOptions: {
                keepAlive: 1
            },
            poolSize: 5
        },
        replset: {
          rs_name: 'myReplicaSet',
          poolSize: 5
        },
        db: {
          w: 1,
          numberOfRetries: 2
        }
        */
    },
    hostname: 'http://localhost:3000',
    app: {
        name: 'Streams Editor | MEAN app'
    },
    logging: {
        format: 'combined'
    },
    strategies: {
        local: {
            enabled: true
        },
        landingPage: '/',
        facebook: {
            clientID: '1756707584580791',
            clientSecret: '6831ce454e3a792dca922bd681b963bf',
            callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
            enabled: true
        },
        twitter: {
            clientID: 'fyJTnfufwIBEfKzpAl5N8JCyC',
            clientSecret: 'LYJp3xPILd9qu2QcrRSQ1eKR0OXIa46q0cHUmOeNJGD6k3UJfM',
            callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
            enabled: true
        },
        github: {
            clientID: 'e7305799a9b0ce4105c1',
            clientSecret: 'c6435d3dacc92a56e5e4f301242bf372a6066567',
            callbackURL: 'http://localhost:3000/api/auth/github/callback',
            enabled: true
        },
        google: {
            clientID: '817685966771-drnduo10641tj1r2b05qahm8q9jq0qea.apps.googleusercontent.com',
            clientSecret: 'fs0apTKIRdZK_ps44oSQP0fR',
            callbackURL: 'http://localhost:3000/api/auth/google/callback',
            enabled: true
        },
        linkedin: {
            clientID: 'API_KEY',
            clientSecret: 'SECRET_KEY',
            callbackURL: 'http://localhost:3000/api/auth/linkedin/callback',
            enabled: false
        }
    },
    emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
    mailer: {
        service: 'SERVICE_PROVIDER',
        auth: {
            user: 'EMAIL_ID',
            pass: 'PASSWORD'
        }
    },
    secret: 'SOME_TOKEN_SECRET'
}
