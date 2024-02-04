const productsViewScreen = require('../screens/productView.screen')

describe('Search products', () => {
    /*
    beforeEach(async () => {
        //verififcar se o app ja esta instalado e executando
        let state = await driver.queryAppState("br.art.ebaconline")
        if(state !== 4){
            await driver.lauchApp()
        }
    });

    afterEach(async () => {
        //fechar o app
        await driver.closeApp()
    });
    */

    it('should search by Ingrid', async () => {
        let searchName = 'Ingrid'
        await productsViewScreen.waitProduct(searchName)
        await productsViewScreen.search()
        await productsViewScreen.searchBy(`${searchName}\n`)

        // Possível Erro ou Flaky Test
        expect(await productsViewScreen.product(searchName)).toExist()
    });
});