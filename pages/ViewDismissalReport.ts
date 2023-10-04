import { Page } from "@playwright/test";

export default class ViewDismissalReportPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get ReportHeader() {
    return '//h1[".seoudi__header"]';
  }
  //   Methods
  async getReportHeader() {
    return this.page.locator(this.ReportHeader);
  }
}
