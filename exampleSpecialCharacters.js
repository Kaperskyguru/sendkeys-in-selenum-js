const { Builder, By, Key } = require("selenium-webdriver");

async function exampleSpecialCharacters() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://ecommerce-playground.lambdatest.io");

    // Locate the search box
    const searchBox = await driver.findElement(By.id("search-box"));

    // Entering 'Selenium' and then pressing the Enter key using sendKeys()
    await searchBox.sendKeys("LambdaTest", Key.ENTER);

    // Wait for a few seconds (optional) to observe the results
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
}

exampleSpecialCharacters();
