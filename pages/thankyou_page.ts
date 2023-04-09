import { By } from 'selenium-webdriver';

async function thanks(driver){
    const thanksTitle = await driver.findElement(By.css('div#checkout_complete_container > h2'));
    return await thanksTitle.getText();
}

export { thanks };