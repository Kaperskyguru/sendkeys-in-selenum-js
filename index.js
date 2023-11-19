async function sendKeyPasswordWithLambdaTest() {
  const USERNAME = ""; //replace with your username
  const KEY = ""; //replace with your accesskey
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  const capabilities = {
    browserName: "Chrome",
    browserVersion: "120.0",
    "LT:Options": {
      username: USERNAME,
      accessKey: KEY,
      geoLocation: "US",
      platformName: "Windows 10",
      build: "Password Example",
      project: "Password Example with SendKeys",
      w3c: true,
      plugin: "node_js-node_js",
    },
  };

  const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;
  try {
    driver = await new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();

    return await examplePasswordEntry(driver);
  } catch (error) {
    throw error;
  } finally {
    await driver.quit();
  }
}
