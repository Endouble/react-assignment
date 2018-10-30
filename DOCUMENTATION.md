# Pokeuble React App

## Introduction
Welcome to Pokeuble, here you can find brief of what, how and why is done.

## Development principles
A pattern of components and containers is used, based on composition.

Due separation of concerns, `/api`, `/modules`, `/pages` and `/styles` is the main structure:

- api:
    - Exports Promised sorted by features/folders, those are according to HTTP verbs. You can chain `then` to consume the response data and `catch` for error handling.

- modules:
Storages all the components we are using, each folder contains the required files to add value or to add a feature to higher components such pages.
Components are the most basic artifact of the app, they can just render a module (html and css), bring some state for visual manipulation or connect to an upper state to keep it aligned with other components.
    - *containers*:
        Are the shell of the component, they are connected to context. They don't have styles and are the best place to manipulate internal state to pass down props for rendering such as `hasError`, `isLoading` and items data.

    - *components*:
        Pure rendering components, they are all about look and feel. They have styles scoped by component to avoid overrides. They can trigger callbacks to update states in higher levels.

    - *context*:
        Always are context consumers to bring down props, once you have more than one context consumer, you can move out the container and convert it in a context file.

- pages:
    - Higher components (not HOC), where contains the state of the app so are usually connected to context so they updated the look and feel by refreshing the props of childs.

- styles:
    - Since all styles are scoped by component, here are placed the general exported styles, mixins to bring common styles and avoid extends and var to keek the values consistents.

## Commenting code
Code blocks are not commented to expose context and explanation because variables and methods names and flow are enough to keep the reader in context, after reading this documentation you can easily follow/add features.

Read more: https://blog.codinghorror.com/coding-without-comments/

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
