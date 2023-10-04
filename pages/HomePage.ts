import { Page } from "@playwright/test";
import PendingOrdersPage from "./PendingOrdersPage";
import LoginPage from "./LoginPage";

export default class HomePage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get WelcomeMessage() {
    return "//div/p/span";
  }
  private get MenuItem() {
    return '//li[".menu-item "]';
  }
  private get AllEmployees() {
    return 'a:has-text("All Employees")';
  }
  private get LogoutButton() {
    return 'a:has-text("Logout")';
  }
  //   Methods
  async load() {
    await this.page.goto("/admin/home");
    return this;
  }
  async getWelcomeMessage() {
    return this.page.locator(this.WelcomeMessage);
  }
  async clickOnMenuItem(index: number) {
    await this.page.locator(this.MenuItem).nth(index).click();
    return new PendingOrdersPage(this.page);
  }
  async clickOnAllEmployees() {
    await this.page.click(this.AllEmployees);
  }
  async clickOnLogoutButton() {
    await this.page.click(this.LogoutButton);
    return new LoginPage(this.page);
  }
}
