const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
                          width: 1920,
                          height: 1080,
                          deviceScaleFactor: 1,
                        })
  await page.goto('https://www.ozon.ru');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();