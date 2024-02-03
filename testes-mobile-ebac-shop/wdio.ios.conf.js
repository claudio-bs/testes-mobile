const {join} = require('path')
require('ts-node').register({ files: true })
const allure = require('allure-commandline')


exports.config = {
    //hostname: 'localhost',
    //port: 4723,
    //path: '/wd/hub',
    //user: "cludiobarretosan_ScXFJE",
    user: "cludiobarretosan_b1CBqH",
    //key: "VfUsp2xqWa1KCngtS7Bg",
    key: "tq3WXsTK6wDQStQT5UN3",
    //services: ['appium'],
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    suites: {
        products: [
            //'./test/specs/products.spec.js',
            //'./test/specs/search.spec.js'
            './test/specs/cartproduct.spec.js'
        ]
    },
    framework: 'mocha',
    capabilities: [
        {
            "project": "Meu primeiro projeto Appium iOS BS",
            "build": "EBAC Test",
            "name": "ebac-test",
            "platformName": "ios",
            "platformVersion": "15",
            "deviceName": "iPhone 13",
            "browserstack.debug": true,
            "app": "bs://ea62b48a48d0e02323ecd19b2c2013ef30edec15",
            //"app": "bs://cc32a26d333bfb5a7674bbec9ba04ff318755ccd",
            "newCommandTimeout": 240
        }
    ],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }],
    ],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await driver.takeScreenshot()
        }
    },
    beforeSuite: async function() {
        //verififcar se o app ja esta instalado e executando
        let state = await driver.queryAppState("br.art.ebaconline")
        if(state !== 4){
            await driver.lauchApp()
            await driver.context('FLUTTER')
        }
    },
    afterSuite: async function() {
        //fechar o app
        await driver.closeApp()
    },
    maxInstances: 1
}