import { Builder, By, until, WebDriver } from 'selenium-webdriver'
import 'chromedriver'

let driver: WebDriver

async function exampleTest() {
  driver = await new Builder().forBrowser('chrome').build()

  try {
    await driver.get('http://localhost:3000') // URL de tu aplicación Next.js
    const element = await driver.findElement(By.name('q'))
    await element.sendKeys('Selenium')
    await element.submit()
    await driver.wait(until.titleIs('Selenium - Google Search'), 1000)
  } finally {
    await driver.quit()
  }
}

exampleTest().catch(console.error)
