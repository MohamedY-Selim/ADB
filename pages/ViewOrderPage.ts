import { Page } from "@playwright/test";

export default class ViewOrderPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get OrderHeader() {
    return '//h1[".seoudi__header"]';
  }
  //   Methods
  async getOrderHeader() {
    return this.page.locator(this.OrderHeader);
  }
}
