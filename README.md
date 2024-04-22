# OrangeHRM Automated by Playwright
This is a simple project of Web automtion(OrangeHRM) for multiple browser using with Playwright, Javascript(node.js library). Here automated test for two browsers (Chrome,Firefox).

## Setting up the Project
1. Clone the repository.

        https://github.com/sborsha/OrangeHRM-Automation-by-Playwright.git
3. Install Dependencies:

        npm install
4. For Execute the automated tests

        npm playwright test

## Positive Test Cases
- Verify successful login with valid credentials.
- Validate successful login by checking for the presence of elements on the dashboard page.
- Create a new employee from PIM menu:
  - Navigate to the PIM menu.
  - Click on the "Add Employee" option.
  - Fill in the required details and submit the form.
  - Verify that the new employee is created successfully.

## Negative Test Cases
- Test login with invalid username.
- Test login with invalid password.
- Verify appropriate error messages are displayed for invalid login attempts.

## Validation of Login
- After each login attempt, assert whether the login was successful or unsuccessful based on expected outcomes.
- For successful logins, verify elements unique to the dashboard page.
- For unsuccessful logins, validate the presence of error messages.

## Output
![playwright2brow](https://github.com/sborsha/OrangeHRM-Automation-by-Playwright/assets/97577812/da250ce4-3bf7-45ca-937a-286aa620bb86)
