const { Builder, By } = require("selenium-webdriver");

async function exampleTextEntry() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://ecommerce-playground.lambdatest.io");

    // Locate the text field
    const textField = await driver.findElement(By.id("username"));

    // Entering text into the text field using sendKeys()
    await textField.sendKeys("lambdatest");

    // Optionally, submitting the form after text entry
    await textField.submit();

    // Wait for a few seconds (optional) to observe the results
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
}

exampleTextEntry();
