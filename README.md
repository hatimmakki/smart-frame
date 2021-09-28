# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This project gets information about random 10 artworks from the metmuseum.github.io

Because the app is run on localhost, the API sometimes ban the IP if there are a lot of API requests. Because the API doesn't provide a single endpoint to provide multiple artworks, we have to create 10 requests at once, which may cause API block.

So the solution was to provide dummy data, only in case the re is a network error.

- If the app doesn't work fine because of the API errors, just replace APIManager.getRandomArtworks in App file, with APIManager.getDummyArtworks
- for simplicity, the API urls saved in the constants js file instead of env variables.

## Run the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

# Design System

You can view the design system on Figma [here](https://www.figma.com/file/PxvEoxTDHmAwTWYpF20Xdi/Untitled?node-id=2%3A2)

# Workflow

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPxvEoxTDHmAwTWYpF20Xdi%2FSmart-Frame%3Fnode-id%3D3%253A286" allowfullscreen></iframe>