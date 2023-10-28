describe('Primeiro teste', () => {
    it('acessar o menu forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('wdio')
        expect(await $('~text-input')).toBeDisplayed()
    });
});