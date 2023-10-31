const {join} = require('path')
require('ts-node').register({ files: true })

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
    ]
}