require('dotenv').config()

const { join } = require('path')
const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        platformName: "Android",
        platformVersion: "9.0",
        deviceName: "ebac-qe",
        automationName: "UiAutomator2",
        //"appium:appPackage": "com.woocommerce.android",
        //"appium:appActivity": ".ui.main.MainActivity",
        //"appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
        app: join(process.cwd(), './app/android/loja-ebac.apk'),
        appWaitActivity: 'com.woocommerce.android.ui.login.LoginActivity',
        newCommandTimeout: 240
    }]
} : {
    capabilities: [{
        platformName: "ios",
        deviceName: "iPhone 13",
        platformVersion: "15.2",
        orientation: "PORTRAIT",
        automationName: "XCUITest",
        app: join(process.cwd(), './app/ios/loja-ebac.ipa'),
        newCommandTimeout: 240
    }]
}

let localConf = {
    ...generalConf,
    ...capabilities,
    hostname: 'localhost',
    port: 4723,
    services: ['appium']
}

module.exports = { localConf }