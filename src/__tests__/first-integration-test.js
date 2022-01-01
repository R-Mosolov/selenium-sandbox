const {Builder, By} = require('selenium-webdriver');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('firefox').build();

    await driver.get('http://localhost:3000/');
    let button = await driver.findElement(By.id('button'));
    await button.click();
})();