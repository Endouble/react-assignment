# Endouble React Assignment

## Proyect Backend Scaffolding

The backend configuration is at a root level, where there are you will find the server and the services folder.

In the Node Express Server I used concurrently to run the React (on port 3000) app and the server (on port 5000). The –kill-others-on-fail flag will kill other processes if one exits with a non zero status code.

The services folder uses 'isomorphic-fetch' to make the call the the API.

## Proyect Frontend Scaffolding

I respected the create-react-app basic folder organization, but i added a "pages" folder, where I put the views, css and assets. Inside the "table" folder I also have a "components" folder.

Finally, inside the "client" folder, you will find the coverage report inside the "coverage" folder.

## Other stuff

### .gitignore

I extended the gitignore file at a root level so I make sure only the important things will be commited.

### react-modal

To show the API response detail, I'm using this package.

### Roboto font

I'm calling google fonts to import Roboto as an application font-family.