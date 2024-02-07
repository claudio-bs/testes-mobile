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

    get #addSize(){
        return $('~Size Selecione uma Size')
    }

    get #addSizeT(){
        return $('~M')
    }

    get #addColor(){
        return $('~Color Selecione uma Color')
    }

    get #addColorW(){
        return $('~White')
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
        await $(`-ios predicate string:name CONTAINS '${name}'`).waitForDisplayed({ timeout: 20000 })
    }

    async product(name){
        await this.waitProduct(name)
        return await $(`-ios predicate string:name CONTAINS '${name}'`)
    }

    async toCart(){
        await this.#addToCart.click()
    }

    async setSize(){
        await this.#addSize.click()
    }

    async setSizeT(){
        await this.#addSizeT.click()
    }

    async setColor(){
        await this.#addColor.click()
    }

    async setColorW(){
        await this.#addColorW.click()
    }

    async check(){
        await this.#checkcart.click()
    }
    
}

module.exports = new ProductViewScreen()