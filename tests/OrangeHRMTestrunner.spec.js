import { expect, test } from '@playwright/test';
import {LoginPage} from "../pages/login";

test('Login unsuccessfully with invalid credentials', async ({ page }) => {

  const  Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login('wrong', 'wrong' );
  await expect(Login.invalidErrorMessage).toHaveText("Invalid credentials");

});

test('Login successfully with valid credentials', async ({ page }) => {

  const  Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('Admin', 'admin123' )
  await expect(Login.propic).toBeVisible();

});

test('Create new user successfully', async ({ page }) => {

  const  Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('Admin', 'admin123' )
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("button", { name: " Add" }).click();
  await page.locator("form span").click();
  await page.getByPlaceholder("First Name").fill("Demo");
  await page.getByPlaceholder("Last Name").fill("User");
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill("demouser13");
  await page.locator('input[type="password"]').first().fill("Demouser123");
  await page.locator('input[type="password"]').nth(1).fill("Demouser123");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(Login.EmployeeImg).toBeVisible();

});