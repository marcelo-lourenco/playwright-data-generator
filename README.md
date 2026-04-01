# Automated Tests with Playwright and Gerador-BR

Example project for automated user interface (UI) tests using **Playwright** and **Gerador BR** for creating mock data

## Setup

**Prerequisites:**

* [Node.js](https://nodejs.org/) (includes npm)
* [Playwright](https://playwright.dev/): `npm i -D @playwright/test`

**Installation:**

1. Clone this repository.
2. Open your terminal in the project's root folder.
3. Install dependencies:

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
* [typescript](https://www.npmjs.com/package/typescript): TypeScript language for type-safe JavaScript development.
* [gerador-br](https://www.npmjs.com/package/gerador-br): Library to generate Brazilian mock data.

## Target Page

The auto-fill example will be on the following form:
[Formulário para Teste - Gerador BR](https://box4.dev/gerador-br/formulario-para-teste)

## Documentation

[gerador-br](https://box4.dev/gerador-br/)
