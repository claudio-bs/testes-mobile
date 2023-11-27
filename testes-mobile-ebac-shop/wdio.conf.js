const {join} = require('path')
require('ts-node').register({ files: true })
const allure = require('allure-commandline')


exports.config = {
    //hostname: 'localhost',
    //port: 4723,
    //path: '/wd/hub',
    user: "cludiobarretosan_ScXFJE",
    key: "VfUsp2xqWa1KCngtS7Bg",
    //services: ['appium'],
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [
        {
            //"platformName": "Android",
            //"appium:platformVersion": "9.0",
            //"appium:deviceName": "ebac-qe",
            //"appium:automationName": "UiAutomator2",
            //"appium:appPackage": "com.woocommerce.android",
            //"appium:appActivity": ".ui.main.MainActivity",
            //"appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"

            'app': 'bs://bf591bae6641bc766255b2247d65ef5b95db77f3',
            'device': 'Samsung Galaxy Note 20',
            'os_version': '10.0',
            'project': 'Meu segundo projeto em Device Farm',
            'build': '2',
            'name': 'add_product'
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
    }]
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
    }
}