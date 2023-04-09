import { By } from 'selenium-webdriver';
import data_constants from '../constants/data_constants';

async function checkout(driver){
    const firstnameInput = await driver.findElement(By.id('first-name'));
    const lastnameInput = await driver.findElement(By.id('last-name'));
    const zipcodeInput = await driver.findElement(By.id('postal-code'));
    const continueButton = await driver.findElement(By.id('continue'));

    await firstnameInput.sendKeys(data_constants.FIRSTNAME);
    await lastnameInput.sendKeys(data_constants.LASTNAME);
    await zipcodeInput.sendKeys(data_constants.ZIPCODE);
    await continueButton.click();

    const finishButton = await driver.findElement(By.id('finish'));
    await finishButton.click();
}

export { checkout };