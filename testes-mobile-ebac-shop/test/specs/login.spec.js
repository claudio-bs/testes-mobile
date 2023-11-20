const homeScreen = require("../screens/home.screen");

describe('Access Admin Panel', async () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()
    });
});