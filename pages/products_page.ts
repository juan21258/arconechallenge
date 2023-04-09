import { By } from 'selenium-webdriver';

async function selectProduct(driver){
    const defaultProduct = await driver.findElement(By.id('add-to-cart-sauce-labs-backpack'));
    const cartIcon = await driver.findElement(By.css('div#shopping_cart_container > a'));
    await defaultProduct.click();
    await cartIcon.click();
    const checkoutButton = await driver.findElement(By.id('checkout'));
    await checkoutButton.click();
}

export { selectProduct };