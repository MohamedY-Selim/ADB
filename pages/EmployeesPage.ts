import { Page } from "@playwright/test";
import ViewDismissalReportPage from "./ViewDismissalReport";
import EditEmployeePage from "./EditEmployeePage";

export default class EmployeesPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get AllEmployeesWrapper() {
    return "#seoudi_all_employees_wrapper";
  }
  private get EditButton() {
    return 'a:has-text("Edit")';
  }
  //   Methods
  async load() {
    await this.page.goto("/admin/employees");
    return this;
  }
  async getAllEmployeesWrapper() {
    return this.page.locator(this.AllEmployeesWrapper);
  }
  async clickOnEditButton(index: number) {
    await this.page.locator(this.EditButton).nth(index).click();
    return new EditEmployeePage(this.page);
  }
}
