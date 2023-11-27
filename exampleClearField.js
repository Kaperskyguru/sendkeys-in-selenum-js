const { By } = require("selenium-webdriver");

async function exampleClearField() {
  const driver = await setupDriver();

  try {
    await driver.get(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );

    // Locate the text field
    const textField = await driver.findElement(By.id("input-email"));

    // Entering text into the text field using sendKeys()
    await textField.sendKeys("LambdaTest@test.com");

    // Wait for a few seconds (optional) to observe the entered text
    await driver.sleep(2000);

    // Clearing the text field using the clear() method
    await textField.clear();

    // Wait for a few seconds (optional) to observe the cleared text field
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
}

exampleClearField();
