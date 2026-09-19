import{test,expect} from '@playwright/test'

test("gitdemo", async ({page})=>{
await page.goto("https://www.youtube.com/")


await page.close()
await page.waitForTimeout(5000)
await page.locator("#ID").click()


})
