<img src="https://workingatendouble.com/content/uploads/2016/09/logo_endouble_default_coated.jpg" width="400">

# React assignment

To complete the assignment, create a repo and send us the link when you're done. To help us assess the assignment, please commit often and use clear and concise commit messages.

## The assignment

Create an application on top of [Create React App](https://github.com/facebookincubator/create-react-app) that:

- Retrieves data from an API (refer to https://github.com/toddmotto/public-apis/ for public APIs)
- Shows a grid of items (thumbnails, cards, etc.)
- Has a form that allows filtering the data set
- Shows item details (large image or other information available from the API's response) in a modal when an item is clicked

## Requirements

- Test coverage is sufficient
- Linter and tests pass
- Works in IE11 and evergreen browsers
- Eslint rules extend [eslint-config-endouble](https://www.npmjs.com/package/@endouble.com/eslint-config-endouble)
- Uses web fonts (eg. Google Fonts)
- Runs on HTTPS
- Third-party package usage kept to a minimum
- No external state managers (MobX, Redux, ...)
- UI is accessible by keyboard
- Code is documented
- Items in the grid show up to four items per row and gracefully degrade to a vertical list on narrow screens
