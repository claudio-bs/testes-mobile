describe('Primeiro teste', () => {
    it('Acessar o menu Forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('wdio')
        expect(await $('~text-input')).toBeDisplayed()
        await $('~Dropdown').click()
        await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]').click()
    });
});