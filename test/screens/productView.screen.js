class ProductViewScreen {

    get #products(){
        return $$(`-ios predicate string:name CONTAINS 'R$'`)
    }

    get #searchIcon(){
        return $(`-ios class chain:**/XCUIElementTypeButton[2]`)
    }

    get #searchText(){
        return $(`-ios predicate string:type == "XCUIElementTypeTextField"`)
    }

    get #searchBtn(){
        return $(`~Procurar`)
    }

    get #addToCart(){
        return $(`-ios predicate string:name == "Adicionar ao carrinho"`)
    }

    get #checkcart(){
        return $(`-ios predicate string:name == "1" AND label == "1" AND type == "XCUIElementTypeButton"`)
    }

    async search() {
        await this.#searchIcon.waitForEnabled({ timeout: 10000 })
        await this.#searchIcon.click()
    }

    async searchBy(name){
        await this.#searchText.waitForEnabled({ timeout: 10000 })
        await this.#searchText.setValue(name)
        await this.#searchBtn.click()
    }

    async productlist(){
        return await this.#products
    }

    async waitProduct(name){
        await $(`-ios predicate string:name CONTAINS '${name}'`).waitForDisplayed({ timeout: 10000 })
    }

    async product(name){
        await this.waitProduct(name)
        return await $(`-ios predicate string:name CONTAINS '${name}'`)
    }

    async toCart(){
        await this.#addToCart.click()
    }

    async setSize(){
        const x = 145;  // Adjust this value as needed
        const y = 494;  // Adjust this value as needed
        await driver.touchAction([{ action: 'tap', x, y }]).click()

    }

    async setSizeM(){
        const x = 49;  // Adjust this value as needed
        const y = 619;  // Adjust this value as needed
        await driver.touchAction([{ action: 'tap', x, y }]).click()
    }

    async setColor(){
        const x = 77;  // Adjust this value as needed
        const y = 574;  // Adjust this value as needed
        await driver.touchAction([{ action: 'tap', x, y }]).click()

    }

    async setColorBlue(){
        const x = 60;  // Adjust this value as needed
        const y = 550;  // Adjust this value as needed
        await driver.touchAction([{ action: 'tap', x, y }]).click()
    }

    async check(){
        await this.#checkcart.click()
    }
}

module.exports = new ProductViewScreen()