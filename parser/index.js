const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');
// var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

// var driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .build();

async function example() {
  let driver = await new Builder()
    .withCapabilities(Capabilities.chrome())
    // .forBrowser('chrome')
    .build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
}
example().then(r => {
  console.log(r);
})
const url = 'https://www.google.ru'