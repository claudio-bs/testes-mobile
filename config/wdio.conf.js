const { bsConf } = require('../config/bs.conf');
const { localConf } = require('../config/local.conf');

require('dotenv').config()

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf
        case 'browserstack':
            return bsConf
        case 'saucelabs':
            return {}
    }
}

exports.config = getConfig()