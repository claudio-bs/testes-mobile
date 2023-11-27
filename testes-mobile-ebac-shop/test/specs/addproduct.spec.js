const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")
const productScreen = require("../screens/product.screen")
const checkProductScreen = require('..//screens/checkProduct.screen')

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let text = 'Camiseta T-shirt Gola V'
let text2 = 'Camiseta T-shirt Simples'
let price1 = '80'
let price2 = '50'

describe('Access Admin Panel and Register a Product', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.gototwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect (await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });

    it('should register a product', async () => {
        await productScreen.goToRegister()
        await productScreen.setAddProduct()
        await productScreen.setSimpleProduct()
        await productScreen.setProduct(text)
        await productScreen.setDescription()
        await productScreen.setVisualEditor(text2)
        await productScreen.buttonPrice()
        await productScreen.setAddPrice(price1, price2)
        await productScreen.menuPublish()
        await checkProductScreen.navigation();
        await checkProductScreen.searchMenu();
        await checkProductScreen.setSearchProduct(text);

        expect(await checkProductScreen.checkProduct()).toBeClickable();
    });
});
