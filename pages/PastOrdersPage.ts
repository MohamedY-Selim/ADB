import { Page } from "@playwright/test";
import ViewOrderPage from "./ViewOrderPage";

export default class PastOrdersPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get PastOrdersWrapper() {
    return "#seoudi_past_orders_wrapper";
  }
  private get Options() {
    return '//a[@data-toggle="dropdown"]';
  }
  private get ViewOrderButton() {
    return 'li:has-text("View Order")';
  }
  //   Methods
  async load() {
    await this.page.goto("/admin/orders-list/past");
    return this;
  }
  async getPastOrdersWrapper() {
    return this.page.locator(this.PastOrdersWrapper);
  }
  async clickOnOptionsButton(index: number) {
    await this.page.locator(this.Options).nth(index).click();
    return this;
  }
  async clickOnViewOrderButton(index: number) {
    await this.page.locator(this.ViewOrderButton).nth(index).click();
    return new ViewOrderPage(this.page);
  }
}
