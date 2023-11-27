const { setupDriver } = require("./web-driver");

async function sendKeyPasswordWithLambdaTest() {
  try {
    const driver = await setupDriver();

    return await examplePasswordEntry(driver);
  } catch (error) {
    throw error;
  } finally {
    await driver.quit();
  }
}
