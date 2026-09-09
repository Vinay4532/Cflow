const { BasePage } = require("../utils/BasePage");
class CartPage extends BasePage
{
    constructor(page)
    {
        super(page)
        {

        this.cartLink = page.locator("#cartur");
       this.productName = page.locator("#tbodyid tr td:nth-child(2)");
       this.productPrice = page.locator("#tbodyid tr td:nth-child(3)");
        this.placeOrderButton = page.locator("//button[text()='Place Order']");

        this.nameField = page.locator("#name");
        this.countryField = page.locator("#country");
        this.cityField = page.locator("#city");
        this.cardField = page.locator("#card");
        this.monthField = page.locator("#month");
        this.yearField = page.locator("#year");

        this.purchaseButton = page.locator("//button[text()='Purchase']");
        this.successMessage = page.locator("//h2[text()='Thank you for your purchase!']");
        }
    }
    async openCart()
{
    await this.click(this.cartLink);
    await this.productName.first().waitFor({ state: "visible" });
}

    async getProductName()
{
    return await this.getText(this.productName.first());
}

    async getProductPrice()
{
    return await this.getText(this.productPrice.first());
}

    async placeOrder()
    {
        await this.click(this.placeOrderButton);
    }
     async fillOrderForm(order)
    {
        await this.fill(this.nameField, order.name);
        await this.fill(this.countryField, order.country);
        await this.fill(this.cityField, order.city);
        await this.fill(this.cardField, order.card);
        await this.fill(this.monthField, order.month);
        await this.fill(this.yearField, order.year);
    }
    async purchase()
    {
        await this.click(this.purchaseButton);
    }

    async getSuccessMessage()
    {
        await this.wait(this.successMessage);
        return await this.getText(this.successMessage);
    }
}
module.exports={CartPage}