# reactive-calculator
A simple desktop calculator made with React to demonstrate basic frontend web development concepts.


## Required Software
* Node.js
* Visual Studio Code
* a web browser


## Phase 1: Create Minimal Backend
Before we can start creating our frontend, we will need a minimal backend that will simply serve our frontend to each client. We will use Express.js to create our backend and we will also use Nodemon to facilitate the development of our backend. Both of these packages will be installed via npm. We will also create a simple webpage that will serve as the basis of our frontend.

01. create a folder named `reactive-calculator`
02. open the folder in VS Code
03. click Terminal > New Terminal
04. execute `npm init` in the terminal
05. fill out the requested information at each prompt
06. execute `npm install --save-dev nodemon`
07. execute `npm install --save express`
08. create a `public` folder inside your project folder
09. create `public/index.html` with the following content:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Reactive Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div id="root">Loading...</div>
    </body>
</html>
```
10. create `index.js` with the following content:
```js
/*
 * Reactive Calculator - Backend
 *
 * This is the backend code for the calculator.
 */

// Import express and create an app object
const express = require("express");
const app = express();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = parseInt(process.env.PORT || "8000");

// Configure middleware
app.use(express.static("./public"));

// Listen for incoming connections
app.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}/...`);
});
```
11. open `package.json` and add debug and start scripts like this:
```json
{
  ...
  "scripts": {
    "debug": "nodemon index.js",
    "start": "node index.js",
    ...
  }
  ...
}
```
12. execute `npm run debug` to start the backend
13. navigate to http://localhost:8000/ in your web browser and you should see this:
![phase1](https://github.com/DylanCheetah/reactive-calculator/blob/62210358123894eb2d6b1f0e3d9e02509b9c9016/screenshots/phase1.png)


## Phase 2: Setup React
Before we start writing the code for our frontend, we will need to setup React. This can be done manually or via automated tools such as `create-react-app`. In this tutorial, we will show you how to setup React manually in order to gain an in-depth understanding of how the build system works. We will be using Webpack to handle building and packaging our frontend code, Babel to compile our JSX code to plain JS code, and various Webpack loaders and plugins in order to assist with the automatic packaging process.

01. click Terminal > New Terminal to open another terminal
02. execute `npm install --save-dev webpack webpack-cli babel-loader css-loader file-loader html-loader sass-loader style-loader @babel/core @babel/preset-react sass html-webpack-plugin`
03. execute `npm install --save react react-dom`
04. create `.babelrc` with the following content:
```json
{
    "presets": [
        "@babel/preset-react"
    ]
}
```
05. create `webpack.config.js` with the following content:
```js
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve("public"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
			{
			    test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
			    test: /\.svg$/,
				use: "file-loader"
			}
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
```
06. create a `src` folder inside your project folder
07. move `public/index.html` to `src`
08. create `src/index.js` with the following content:
```js
/*
 * Reactive Calculator - Frontend Entrypoint
 *
 * This is the entrypoint for the frontend.
 */

import React from "react";
import {createRoot} from "react-dom";

import App from "./App";


// Create React root
const root = createRoot(document.querySelector("#root"));
root.render(<App/>);
```
09. create `src/App.js` with the following content:
```js
/*
 * Reactive Calculator - App Component
 *
 * This is the app component for the calculator.
 */

import React from "react";


// Define app component
function App() {
    return (
        <div>Hello World!</div>
    );
}


export default App;
```
10. open `package.json` and add a build script like this:
```json
{
  ...
  "scripts": {
    "build": "webpack --mode development",
    ...
  }
  ...
}
```
11. execute `npm run build` to do an initial build of the frontend
12. navigate to http://localhost:8000 in your web browser and you should see this:
![phase2](https://github.com/DylanCheetah/reactive-calculator/blob/e0424c01a428a99339c125d4befcca0977639866/screenshots/phase2.png)


## Phase 3: Setup Bootstrap
To help us create a good layout and theme for our calculator, we will next setup Bootstrap. Bootstrap provides many layout and theme utilities that will be very helpful to us.

1. execute `npm install --save bootstrap`
2. open `src/index.js` and add an additional import like this:
```js
...
import React from "react";
import {createRoot} from "react-dom";

import App from "./App";
import "./styles.scss";
...
```
3. create `src/styles.scss` with the following content:
```scss
@import "bootstrap/dist/css/bootstrap.min"
```
4. execute `npm run build` to build the frontend again
5. navigate to http://localhost:8000 in your web browser and you should notice that the font and margins have changed slightly:
![phase3](https://github.com/DylanCheetah/reactive-calculator/blob/e1538a482d63022187a624ee08917b9c04d554a6/screenshots/phase3.png)
