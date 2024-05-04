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
11. execute `npm run debug` to start the backend
12. navigate to http://localhost:8000/ in your web browser and you should see this:
![phase1](https://github.com/DylanCheetah/reactive-calculator/blob/62210358123894eb2d6b1f0e3d9e02509b9c9016/screenshots/phase1.png)
