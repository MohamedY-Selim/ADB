import { Page } from "@playwright/test";
import User from "../models/User";
import HomePage from "./HomePage";
export default class LoginPage {
  //   Variables
  private page: Page;
  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  //   Elements
  private get emailInput() {
    return "#email";
  }
  private get passwordInput() {
    return "#password";
  }
  private get submitButton() {
    return '//button[@type="submit"]';
  }
  private get SigninHeader() {
    return 'h1:has-text("Sign In")';
  }

  //   Methods "Steps"
  async load() {
    await this.page.goto(
      "https://uat.dashboard.seoudisupermarket.com/admin/login"
    );
    return this;
  }
  async login(user: User) {
    await this.page.type(this.emailInput, user.getEmail());
    await this.page.type(this.passwordInput, user.getPassword());
    await this.page.click(this.submitButton);
    return new HomePage(this.page);
  }
  async getSigninHeader() {
    return this.page.locator(this.SigninHeader);
  }
}
