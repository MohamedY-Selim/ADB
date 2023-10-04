import { Page } from "@playwright/test";

export default class EditEmployeePage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get InfoHeader() {
    return '//h1[".seoudi__header"]';
  }
  private get UpdateButton() {
    return '//button[@type="submit"]';
  }
  //   Methods
  async getInfoHeader() {
    return this.page.locator(this.InfoHeader);
  }
  async clickOnUpdateButton() {
    await this.page.click(this.UpdateButton);
  }
}
