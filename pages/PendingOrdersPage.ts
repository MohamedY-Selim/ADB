import { Page } from "@playwright/test";

export default class PendingOrdersPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get TableHead() {
    return '//th[@aria-label="Admin Input Required"]';
  }
  private get NoPendingOrders() {
    return '//td[".dataTables_empty"]';
  }
  private get ProcessingCard() {
    return "#seoudi_pending_orders_processing";
  }
  //   Methods
  async load() {
    await this.page.goto("/admin/orders");
    return this;
  }
  async getTableHead() {
    return this.page.locator(this.TableHead);
  }
  async getProcessingCard() {
    return this.page.locator(this.ProcessingCard);
  }
  async getNoPendingOrdersMessage() {
    return this.page.locator(this.NoPendingOrders);
  }
}
