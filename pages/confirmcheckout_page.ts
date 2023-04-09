import { By } from 'selenium-webdriver';

async function confirmCheckout(driver){
    const finishButton = await driver.findElement(By.id('finish'));
    await finishButton.click();
}

export { confirmCheckout };