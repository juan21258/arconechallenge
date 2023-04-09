import { Builder, Capabilities } from 'selenium-webdriver';
import data_constants from '../constants/data_constants';
import { login } from '../pages/login_page';
import { selectProduct } from '../pages/products_page';
import { checkout } from '../pages/checkout_page';
import { confirmCheckout } from '../pages/confirmcheckout_page';
const assert = require('assert');
import { thanks } from '../pages/thankyou_page';

async function runTests() {
  let driver;
  try {
    // Set up the WebDriver
    const capabilities = Capabilities.chrome();
    driver = await new Builder()
      .withCapabilities(capabilities)
      .build();

    // Navigate to the page
    await driver.get(data_constants.PAGEURL);
    await driver.manage().window().maximize(); // maximize the window
    await login(driver);
    await selectProduct(driver);
    await checkout(driver);
    await confirmCheckout(driver);
    const thanksText = await thanks(driver);
    assert.strictEqual(await thanksText, data_constants.THANKS, 
      "There was an error going to the thank you page");
  } catch (error) {
    console.error(`Error running tests: ${error}`);
  } finally {
    // Close the WebDriver
    if (driver) {
      await driver.quit();
    }
  }
}

// Run the tests
runTests();
