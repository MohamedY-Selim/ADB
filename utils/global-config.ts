import { chromium, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import User from "../models/User";
async function globalConfig() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const user = new User();
  const loginPage = new LoginPage(page);
  const welcomeMessage = await (
    await (await loginPage.load()).login(user)
  ).getWelcomeMessage();
  await expect(welcomeMessage).toBeVisible();
  await page.context().storageState({
    path: "storageState.json",
  });
}
export default globalConfig;
