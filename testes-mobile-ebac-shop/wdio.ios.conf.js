const {join} = require('path')
require('ts-node').register({ files: true })
const allure = require('allure-commandline')


exports.config = {
    
    ///bs
    //user: "cludiobarretosan_ScXFJE",
    user: "cludiobarretosan_b1CBqH",
    //key: "VfUsp2xqWa1KCngtS7Bg",
    key: "tq3WXsTK6wDQStQT5UN3",

    ///sauce
    ///???
    
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
    ]
}