
const { test, expect } = require("@playwright/test");

const data = require("../fixtures/testData.json");
const { LoginPage } = require("../Pages/LoginPage");
const { HomePage } = require("../Pages/HomePage");
const { ProductPage } = require("../Pages/ProductPage");
const{CartPage} = require("../Pages/CartPage")
test("Valid Login Test", async ({ page }) => {

       const login =new LoginPage(page)
       await login.open()
       await login.login(data.username,data.password)
       const home = new HomePage(page)
       await home.selectProduct(data.product)
       const product = new ProductPage(page)
       await product.addToCart()
       const cart = new CartPage(page)
   await cart.openCart()
   await cart.getProductName()
   await cart.getProductPrice()
   await cart.placeOrder()
   await cart.fillOrderForm(data.order)
   await cart.purchase()
   await cart.getSuccessMessage()
   console.log("Home")

   
});