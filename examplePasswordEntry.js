const { Builder, By } = require("selenium-webdriver");

async function examplePasswordEntry(driver1) {
  const driver = driver1
    ? driver1
    : await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://ecommerce-playground.lambdatest.io");

    // Locate the password field
    const passwordField = await driver.findElement(By.id("password"));

    // Entering a password into the password field using sendKeys()
    await passwordField.sendKeys("secretpassword");

    // Optionally, submitting the form after password entry
    await passwordField.submit();

    // Wait for a few seconds (optional) to observe the results
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
}

examplePasswordEntry();
