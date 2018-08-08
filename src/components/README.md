# All our components will reside here, the main one is App

## As a general rule, our component has five files:

- `index.js` : Is used to export our component to the outside so it can be used anywhere
- `<ComponentName>.scss`: very specific styles of our component, these are NOT general app styles
- `<ComponentName>.js`: Our react component that is exported later on index.js
- `<ComponentName>.test.js`: Our react component test file
- `<ComponentName>.css`: This file is generated while starting/building our app, it's not part or of the source code