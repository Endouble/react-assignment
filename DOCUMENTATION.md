# Pokeuble React App

## Introduction
Welcome to Pokeuble, here you can find brief of what, how and why is done.

## Development principles
A pattern of components and containers is used, based on composition.

Due separation of concerns, `/api`, `/modules`, `/pages` and `/styles` is the main structure:

- **/api**: Exports Promised sorted by features/folders, those are according to HTTP verbs. You can chain `then` to consume the response data and `catch` for error handling.

- **/modules**:
Storages all the components we are using, each folder contains the required files to add value or to add a feature to higher components such pages.
Components are the most basic artifact of the app, they can just render a module (html and css), bring some state for visual manipulation or connect to an upper state to keep it aligned with other components.
    - **containers**:
        Are the shell of the component, they are connected to context. They don't have styles and are the best place to manipulate internal state to pass down props for rendering such as `hasError`, `isLoading` and items data.

    - **components**:
        Pure rendering components, they are all about look and feel. They have styles scoped by component to avoid overrides. They can trigger callbacks to update states in higher levels.

    - **context**:
        Always are context consumers to bring down props, once you have more than one context consumer, you can move out the container and convert it in a context file.

- **/pages**: Higher components (not HOC), where contains the state of the app so are usually connected to context so they updated the look and feel by refreshing the props of childs.

- **/styles**: Since all styles are scoped by component, here are placed the general exported styles, mixins to bring common styles and avoid extends and var to keek the values consistents.

> Context folder contains some default values (from where first context data is built) so we can use it as a default values for some Presentational or Containers so we have only one source of truth.

## Commenting code
Code blocks are not commented to expose context and explanation because variables and methods names and flow are enough to keep the reader in context, after reading this documentation you can easily follow/add features.

Read more: https://blog.codinghorror.com/coding-without-comments/

## Flow
The steps of how the App starts, renders all the composed Components and is built:

- Starts by `src/index.js`, here all `normalize` and global styles are loaded directly in the DOM. Then render the `Home` page, so for scalability we can switch from a router the desired page if necessary to all stored Higher Components in `src/pages` folder.

- `Home` is rendered, since it loads all the main Components such as `Header`, `Footer` and `PokeDex` we can use it to store the data to keep all the Components up to date. For scalability we can create a wrapper to keep the same state across all pages, but is not applied for this single case. Here are also the definition of the methods we can update the data in the state, so can be used in child Components. Data is exposed in the Context by using Context Provider.

- Async calls are done per involved Component, which means each Component that requires to request data should handle the request inside itself, so can be used in different Pages or Components then expose the new data to the Context is connected. e.g `src/PokeDex`

- Components that needs data can connect to Provider by adding a Context Consumer, this is usually done with a Component wrapper like Containers as explained in `Development principles` section, then can pass down props to render. There is also the case we just need presentational components so we can just add the Components inside `src/modules`.



## Scripts
What you can do with available scripts:

- dev: Runs the app with development version based on the ejected version of `react-create-app`.
- start: Starts an `Express` server with the static files from `/build` folder.
- start:secure: Same above server but adding a flag to support HTTPS.
- build: Create static files.
- lint: Runs eslint to whole project.
- test: Runs all the test are written
- commit: Command to keep commits consistent, "kindOfCommit(Component): Description message" pattern was followed. Configured by using `commitizen`.

## Added dependencies
- Styled components - Scoped styles
- Axios - HTTP client
- Express - Node framework
- Commitizen - Commit tool
- Enzyme - React test utilities

## IE11 support
The only fix to support IE11 is the use of `includes` method from lodash imported as single module without installing the whole lodash package.

## Mantainers

<table>
    <tbody>
        <tr>
            <td align="center">
                <a href="https://github.com/larrotta69">
                    <img width="150" height="150" src="https://github.com/larrotta69.png?size=150">
                    </br>
                    Daniel Larrotta
                </a>
            </td>
        </tr>
    <tbody>
</table>
