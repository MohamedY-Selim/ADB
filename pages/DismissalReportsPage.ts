import { Page } from "@playwright/test";
import ViewOrderPage from "./ViewOrderPage";
import ViewDismissalReportPage from "./ViewDismissalReport";

export default class DissmissalReportsPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get DismissalReportsWrapper() {
    return "#seoudi_dismissal_reports_wrapper";
  }
  private get ViewReportButton() {
    return 'a:has-text("View Report")';
  }
  //   Methods
  async load() {
    await this.page.goto("/admin/orders-list/past");
    return this;
  }
  async getDismissalReportsWrapper() {
    return this.page.locator(this.DismissalReportsWrapper);
  }
  async clickOnViewReportButton(index: number) {
    await this.page.locator(this.ViewReportButton).nth(index).click();
    return new ViewDismissalReportPage(this.page);
  }
}
