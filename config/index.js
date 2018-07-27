const config = require('./config');
const NODE_ENV = process.env.NODE_ENV;
let configBuffer = null;
// Init config_buffer according to the NODE_ENV
switch (NODE_ENV) {
    case 'production':
        configBuffer = config.production;
        break;
    case 'staging':
        configBuffer = config.staging;
        break;
    default:
        configBuffer = config.staging;
}
module.exports = configBuffer;