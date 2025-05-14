# Automated Tests with Playwright and Gerador-BR data generator

Example project for automated user interface (UI) tests using **Playwright** and **Gerador BR** for creating mock data.

## Setup

**Prerequisites:**

* [Node.js](https://nodejs.org/) (includes npm)

**Installation:**

1. Clone this repository.
2. Open your terminal in the project's root folder.
3. Run the commands to install dependencies and Playwright browsers:

```bash
npm install
```

## Test Run

Examples of commands to run the tests:

```bash
npx playwright test --headed --project=chromium
npx playwright test --headed --project=webkit
npx playwright test --ui --project=chromium
npx playwright test
```

To view the HTML report of the results:

```bash
npx playwright show-report
```

## Main Dependencies

* [@playwright/test](https://www.npmjs.com/package/@playwright/test): Framework for UI test automation in browsers (Chromium, Firefox, WebKit).
* [@types/node](https://www.npmjs.com/package/@types/node): Contains type definitions for Node.js.
* [gerador-br](https://www.npmjs.com/package/gerador-br): Library to generate Brazilian mock data.

## Target Page

The auto-fill example will be on the following form:
[Formulário para Teste - Gerador BR](https://marcelo-lourenco.github.io/gerador-br/formulario-para-teste)

## Documentation for [gerador-br](https://marcelo-lourenco.github.io/gerador-br/)
