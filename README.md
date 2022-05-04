# Playwright-task

End-to-end test automation project for Znany Lekarz site using `JavaScript` and `Playwright` [https://playwright.dev/](https://playwright.dev/).

I use Page Object Model and environment variables (process.env in node). Configuration allows you to run tests on different browsers and devices including mobile ones.

Scenarios:

* Choose specialization + location from search box dropdown using data from endpoint
* Go to the listing page
* Make sure you are on the correct listing: check if calendar is loaded properly
* Select (from any calendar) free slot and check if booking page for selected slot is loaded properly
 

## Required 

Playwright Test need one of these version of node:
^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 

Installed yarn and env-cmd

## Build project

In the first touch with this project, you need only install all dependencies by  **yarn** or **yarn install**


### Scripts

Main script like: **tests**, is defined in package.json in section scripts and can be run by adding **yarn** before name test.
