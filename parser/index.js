const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');
// var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const screen = {
  width: 1280,
  height: 720
};

async function example() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .withCapabilities(Capabilities.chrome())
    .build();

  let log = (element)=>{
     element.getText().then(function(text){
            console.log(text);
        });
  }

  try {
    await driver.get('https://www.ozon.ru');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // let elem = await driver.findElement(By.css('[data-widget="loginButton"]'))
    // let elem = await driver.findElement(By.css('[title="Вход или регистрация"]'))
    // log(elem)
    // elem.click()
    // console.log('success')
    await driver.wait(until.titleIs('webdriver - Google Search'), 100000);
  } finally {
    await driver.quit();
  }
}
example().then(r => {
  console.log(r);
})
const url = 'https://www.google.ru'