exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_field = page.locator("[name='username']");
        this.password_field = page.locator("[name='password']");
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.invalidErrorMessage = page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text");
        this.propic = page.locator("//img[@class='oxd-userdropdown-img']");
        this.EmployeeImg = page.locator(".employee-image");
    }

    async gotoLoginPage() { 
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    async login(username, password){

        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click();
    }

}
