<img src="https://workingatendouble.com/content/uploads/2016/09/logo_endouble_default_coated.jpg" width="400">

# React assignment

code sandbox: https://codesandbox.io/s/github/BrunoAl/react-assignment

## Instruction

```sh
    to run the project: yarn install && yarn start
    to run unit/integration testing: yarn test
    to run e2e testing (cypress): yarn cy:open
```

## About the code

### Testing

-   react-testing-library was used as a replacement for enzyme, this decision was made because this library encourages good practices and avoids testing implementation details, so as long the functionalities aren't change refactorying the code doesn't break the tests, more here (https://github.com/kentcdodds/react-testing-library)
-   Even though this project is pretty small, Cypress is inclured for E2E testing.

### Documentation

    JSDoc is used to document some functionalities.

### The App

    The spaceX API was the one of choice and dropdown is used to filtering the dataset.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and ejected to have full control over its configuration.

To complete the assignment, fork this repo and send us a PR. To help us assess the assignment, please commit often and use clear and concise commit messages.

## The assignment

Create an application that:

-   retrieves data from an API (refer to https://github.com/toddmotto/public-apis/ for public APIs)
-   shows a grid of items (thumbnails, cards, etc.)
-   has a form that allows filtering the data set
-   shows item details (large image or other information available from the API's response) in a modal when an item is clicked

## Requirements

-   Test coverage is sufficient
-   Linter and tests pass
-   Works in IE11 and up
-   Eslint rules extend [eslint-config-endouble](https://www.npmjs.com/package/@endouble.com/eslint-config-endouble)
-   Uses web fonts (eg. Google Fonts)
-   Runs on HTTPS
-   Third-party package usage kept to a minimum
-   No state managers (MobX, Redux, ...)
-   UI is accessible by keyboard
-   Code is documented
-   Items in the grid show up to four items per row and gracefully degrade to a vertical list on narrow screens
