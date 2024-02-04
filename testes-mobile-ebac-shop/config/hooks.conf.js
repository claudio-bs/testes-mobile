let hooksConf = {
    beforeSuite: async function() {
        //verificar se o app ja esta instalado e executando
        let state = await driver.queryAppState("br.art.ebaconline")
        if(state !== 4){
            await driver.lauchApp()
            await driver.context('FLUTTER')
        }
    },
    afterSuite: async function() {
        //fechar o app
        await driver.closeApp()
    },
}

module.exports = { hooksConf }