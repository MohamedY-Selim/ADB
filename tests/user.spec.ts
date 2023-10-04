import { test, expect } from "@playwright/test";
import User from "../models/User";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import PendingOrdersPage from "../pages/PendingOrdersPage";
import OnGoingOrdersPage from "../pages/OnGoingOrdersPage";
import PastOrdersPage from "../pages/PastOrdersPage";
import DissmissalReportsPage from "../pages/DismissalReportsPage";
import EmployeesPage from "../pages/EmployeesPage";
test("Should be able to login to ADB using UI", async ({ page }) => {
  const user = new User();
  const loginPage = new LoginPage(page);
  const welcomeMessage = await (
    await (await loginPage.load()).login(user)
  ).getWelcomeMessage();
  await expect(welcomeMessage).toBeVisible();
});
test.describe("ADB Test Cases", () => {
  let homePage: HomePage;
  test.use({
    storageState: "storageState.json",
  });
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.load();
  });
  test("Check welcome Message", async ({ page }) => {
    const welcomeMessage = await homePage.getWelcomeMessage();
    await expect(welcomeMessage).toBeVisible();
  });
  test("Pending Orders Test", async ({ page }) => {
    await homePage.clickOnMenuItem(0);
    const pendingOrdersPage = new PendingOrdersPage(page);
    const tableHead = await pendingOrdersPage.getTableHead();
    await expect(tableHead).toBeVisible();
    const processingCard = await pendingOrdersPage.getProcessingCard();
    await expect(processingCard).toBeHidden();
  });
  test("OnGoing Orders Test", async ({ page }) => {
    await homePage.clickOnMenuItem(1);
    const onGoingOrdersPage = new OnGoingOrdersPage(page);
    const onGoingOrdersWrapper =
      await onGoingOrdersPage.getOnGoingOrdersWrapper();
    await expect(onGoingOrdersWrapper).toBeVisible();

    const orderHeader = await (
      await (
        await onGoingOrdersPage.clickOnOptionsButton(0)
      ).clickOnViewOrderButton(0)
    ).getOrderHeader();
    await expect(orderHeader).toBeVisible();
  });
  test("Past Orders Test", async ({ page }) => {
    await homePage.clickOnMenuItem(2);
    const pastOrdersPage = new PastOrdersPage(page);
    const pastOrdersWrapper = await pastOrdersPage.getPastOrdersWrapper();
    await expect(pastOrdersWrapper).toBeVisible();

    const orderHeader = await (
      await (
        await pastOrdersPage.clickOnOptionsButton(0)
      ).clickOnViewOrderButton(0)
    ).getOrderHeader();
    await expect(orderHeader).toBeVisible();
  });
  test("Dismissal Reports Test", async ({ page }) => {
    await homePage.clickOnMenuItem(3);
    const dissmissalReportsPage = new DissmissalReportsPage(page);
    const dismissalReportsWrapper =
      await dissmissalReportsPage.getDismissalReportsWrapper();
    await expect(dismissalReportsWrapper).toBeVisible();

    const reportHeader = await (
      await dissmissalReportsPage.clickOnViewReportButton(0)
    ).getReportHeader();
    await expect(reportHeader).toBeVisible();
  });
  test("Employees Test", async ({ page }) => {
    await homePage.clickOnMenuItem(4);
    await homePage.clickOnAllEmployees();
    const employeesPage = new EmployeesPage(page);
    const allEmployeesWrapper = await employeesPage.getAllEmployeesWrapper();
    await expect(allEmployeesWrapper).toBeVisible();
    const editEmployeePage = await employeesPage.clickOnEditButton(0);
    const infoHeader = await editEmployeePage.getInfoHeader();
    await expect(infoHeader).toBeVisible();
    await editEmployeePage.clickOnUpdateButton();
  });
  test("Logout", async ({ page }) => {
    const loginHeader = await (
      await homePage.clickOnLogoutButton()
    ).getSigninHeader();
    await expect(loginHeader).toBeVisible();
  });
});
