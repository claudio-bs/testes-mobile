class MyStoreScreen {

    get #myStoreLogo(){
        return $('~My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreName(){
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed(){
        await this.#myStoreLogo.waitForExist()
        await this.#myStoreLogo.waitForDisplayed({ timeout: 10000})
        return await this.#myStoreLogo.isDisplayed()
    }
}

module.exports = new MyStoreScreen()