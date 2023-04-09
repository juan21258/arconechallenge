import { By } from 'selenium-webdriver';
import data_constants from '../constants/data_constants';

async function login(driver){
    const usernameInput = await driver.findElement(By.id('user-name'));
    const passwordInput = await driver.findElement(By.id('password'));
    const loginButton = await driver.findElement(By.id('login-button'));

    await usernameInput.sendKeys(data_constants.USERNAME);
    await passwordInput.sendKeys(data_constants.PASSWORD);
    await loginButton.click();
}

export { login };