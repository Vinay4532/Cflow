class BasePage
{
    constructor(page)
    {
        this.page=page
    }
    async navigate(url)
    {
        await this.page.goto(url)
    }
    async click(locator)
    {
        await locator.click()
    }
    async fill(locator,value)
    {
        await locator.fill(value)
    }
    async wait(locator)
    {
        await locator.waitFor({state:'visible'})
    }
    async getText(locator)
    {
        return await locator.textContent()
    }
}
module.exports={BasePage}