const productsViewScreen = require('../screens/productView.screen')

describe('product List', () => {
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
   
    it('should list products', async () => {
        expect(await productsViewScreen.product("Josie Yoga")).toExist()
        expect(await productsViewScreen.productlist()).toBeElementsArrayOfSize(10)
    });
        
});
    
