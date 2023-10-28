const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
            "platformName": "Android",
            "appium:platformVersion": "13.0",
            "appium:deviceName": "ebac-qe",
            "appium:automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/loja-ebac.apk'),
            "appWaitActivity": 'com.woocommerce.android/.ui.login.LoginActivity'
    }]
}