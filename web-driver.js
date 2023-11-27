const { Builder } = require("selenium-webdriver");

const LT_USERNAME = ""; //replace with your username
const LT_ACCESS_KEY = ""; //replace with your accesskey
const GRID_HOST = "hub.lambdatest.com/wd/hub";

const capabilities = {
  browserName: "Chrome",
  browserVersion: "120.0",
  "LT:Options": {
    username: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
    geoLocation: "US",
    platformName: "Windows 10",
    build: "Password Example",
    project: "Password Example with SendKeys",
    w3c: true,
    plugin: "node_js-node_js",
  },
};

const gridUrl =
  "https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@" + GRID_HOST;

export async function setupDriver() {
  let driver = null;
  try {
    driver = await new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();
    return driver;
  } catch (error) {
    throw error;
  } finally {
    await driver.quit();
  }
}
