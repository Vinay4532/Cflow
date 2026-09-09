const { BasePage } = require("../utils/BasePage");
class ProductPage extends BasePage
{
    constructor(page)
    {
        super(page)
        {
             this.addToCartButton = page.locator("//a[text()='Add to cart']");
        }
    }

     async addToCart()
    {
        await this.page.once("dialog", async dialog =>
        {
            await dialog.accept();
        });

        await this.click(this.addToCartButton);
    }

}
module.exports={ProductPage}
