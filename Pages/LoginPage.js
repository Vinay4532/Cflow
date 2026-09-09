const { BasePage } = require("../utils/BasePage");
const data = require("../fixtures/testData.json");

class LoginPage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.loginLink = page.locator("#login2");
        this.usernameField = page.locator("#loginusername");
        this.passwordField = page.locator("#loginpassword");
        this.loginButton = page.locator("//button[text()='Log in']");
    }
    async open()
    {
        await this.navigate(data.baseURL)
    }
      async login(username, password)
      {
        await this.click(this.loginLink)
        await this.wait(this.usernameField)
        await this.fill(this.usernameField,username)
        await this.fill(this.passwordField,password)
        await this.click(this.loginButton)
      }
}
module.exports={LoginPage}