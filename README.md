# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This project gets information about random 10 artworks from the metmuseum.github.io

Because the app is run on localhost, the API sometimes ban the IP if there are a lot of API requests. Because the API doesn't provide a single endpoint to provide multiple artworks, we have to create 10 requests at once, which may cause API block.

So the solution was to provide dummy data, only in case the re is a network error.

- If the app doesn't work fine because of the API errors, just replace APIManager.getRandomArtworks in App file, with APIManager.getDummyArtworks



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

