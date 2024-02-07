const { hooksConf } = require("./hooks.conf")
const { reportersConf } = require("./reports.conf")
const { specsConf } = require("./specs.conf")

let generalConf = {
    port: 443,
    path: '/wd/hub',
    framework: 'mocha',
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    maxInstances: 1,
    ...hooksConf,
    ...reportersConf,
    ...specsConf

    
}
module.exports = { generalConf }