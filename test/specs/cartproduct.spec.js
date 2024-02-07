const productsViewScreen = require('../screens/productView.screen')

describe('Product in the cart shooping', () => {
    it('should choose a product, add it to the shopping cart and check if the product has been added', async () => {
        let searchName = 'Ingrid'

        await productsViewScreen.waitProduct(searchName)
        await productsViewScreen.search()
        await productsViewScreen.searchBy(`${searchName}\n`)

        productsViewScreen.product(searchName).click()
        productsViewScreen.toCart()
        productsViewScreen.setSize()
        productsViewScreen.setSizeT()
        productsViewScreen.setColor()
        productsViewScreen.setColorW()
        productsViewScreen.toCart()
        productsViewScreen.check()
        expect(await productsViewScreen.product(searchName)).toExist()

    });
});