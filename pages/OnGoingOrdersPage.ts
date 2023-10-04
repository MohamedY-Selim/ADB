import { Page } from "@playwright/test";
import ViewOrderPage from "./ViewOrderPage";

export default class OnGoingOrdersPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get OnGoingOrdersWrapper() {
    return "#seoudi_ongoing_orders_wrapper";
  }
  private get Options() {
    return '//a[@data-toggle="dropdown"]';
  }
  private get ViewOrderButton() {
    return 'li:has-text("View Order")';
  }
  //   Methods
  async load() {
    await this.page.goto("/admin/orders-list/on-going");
    return this;
  }
  async getOnGoingOrdersWrapper() {
    return this.page.locator(this.OnGoingOrdersWrapper);
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
