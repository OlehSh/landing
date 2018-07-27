let config;

config = {
    production: {
        url: 'http://my-landing.prod',
        database: {
            client: 'mongodb',
            connection: {
                host: 'HOST_NAME',
                port: 'PORT',
                user: 'USER_NAME',
                password: 'PASSWORD',
                dbNane: 'DB_NAME'
            },
        },

        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    staging: {
        url: 'http://my-landing.local',
        database: {
            client: 'mongodb',
            connection: {
                host: 'HOST_NAME',
                port: 'PORT',
                user: 'USER_NAME',
                password: 'PASSWORD',
                dbNane: 'DB_NAME'
            },
        },
        server: {
            host: '127.0.0.1',
            port: '3001'
        }
    }
};

module.exports = config;