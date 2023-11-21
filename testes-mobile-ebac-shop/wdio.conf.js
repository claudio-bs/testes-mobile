const {join} = require('path')
require('ts-node').register({ files: true })
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [
        {
            "platformName": "Android",
            "appium:platformVersion": "9.0",
            "appium:deviceName": "ebac-qe",
            "appium:automationName": "UiAutomator2",
            "appium:appPackage": "com.woocommerce.android",
            "appium:appActivity": ".ui.main.MainActivity",
            "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
          }
    ],
    waitForTimeout: 30000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
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
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        driver.takeScreenshot()
    }
    
}