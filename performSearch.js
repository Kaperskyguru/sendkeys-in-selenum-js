const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function setupDriver() {
  const options = new chrome.Options();
  // Add any necessary Chrome options here (if needed).
  // Example: options.addArguments('--headless'); // Run Chrome in headless mode.

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
  return driver;
}

async function performSearch() {
  try {
    const driver = await setupDriver();

    await driver.get("<https://www.google.com/>");

    const searchInput = await driver.findElement(By.name("q"));
    await searchInput.sendKeys("Selenium JavaScript");

    await searchInput.sendKeys(Key.ENTER);

    await driver.wait(until.titleContains("Selenium JavaScript"), 5000);

    const pageTitle = await driver.getTitle();
    console.log("Page title:", pageTitle);
  } catch (error) {
    // Step 7: Handle any errors that occur during the execution
    console.error("Error occurred:", error);
  } finally {
    // Step 8: Quit the driver after the test is finished (cleanup)
    await driver.quit();
  }
}
performSearch();
