const { Builder, By } = require("selenium-webdriver");
const { setupDriver } = require("./web-driver");

async function exampleTextEntry() {
  const driver = await setupDriver();

  try {
    await driver.get(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );

    // Locate the text field
    const textField = await driver.findElement(By.id("input-email"));

    // Entering text into the text field using sendKeys()
    await textField.sendKeys("lambdatest@test.com");

    // Optionally, submitting the form after text entry
    await textField.submit();

    // Wait for a few seconds (optional) to observe the results
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
}

exampleTextEntry();
