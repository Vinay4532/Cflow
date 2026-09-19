const { BasePage } = require("../utils/BasePage");

class HomePage extends BasePage
{
    constructor(page)
    {
        super(page);

        this.products = page.locator("//h4[@class='card-title']/a");
    }

    async selectProduct(productName)
    {
        const count = await this.products.count();

        for(let i = 0; i < count; i++)
        {
            const text = await this.getText(this.products.nth(i));

            if(text.includes(productName))
            {
                await this.click(this.products.nth(i));
                break;
            }
        }
    }
}

module.exports = { HomePage };
//console.log("added new feature")
//giyconsole.log("home")