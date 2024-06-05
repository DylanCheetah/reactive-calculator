# reactive-calculator
A simple desktop calculator made with React to demonstrate basic frontend web development concepts. A full step-by-step tutorial that teaches how to recreate this project from scratch for educational purposes is included.


## Required Software
* Node.js
* Visual Studio Code
* a web browser


## Usage
1. clone this repo
2. install Node.js
3. open a terminal to the project folder
4. execute `npm install --save` to install the required dependencies
5. execute `npm start` to start the backend
6. navigate to http://localhost:8000 in your web browser


## Tutorial
### Phase 1: Create Minimal Backend
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


### Phase 2: Setup React
Before we start writing the code for our frontend, we will need to setup React. This can be done manually or via automated tools such as `create-react-app`. In this tutorial, we will show you how to setup React manually in order to gain an in-depth understanding of how the build system works. We will be using Webpack to handle building and packaging our frontend code, Babel to compile our JSX code to plain JS code, and various Webpack loaders and plugins in order to assist with the automatic packaging process.

01. click Terminal > New Terminal to open another terminal
02. execute `npm install --save-dev webpack webpack-cli babel-loader css-loader file-loader html-loader sass-loader style-loader @babel/core @babel/preset-env @babel/preset-react sass html-webpack-plugin react react-dom`
03. create `.babelrc` with the following content:
```json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                "corejs": "3.22"
            }
        ],
        "@babel/preset-react"
    ]
}
```
04. create `.browserslistrc` with the following content:
```rc
> 0.25%
firefox >= 52.3.0
not dead
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
import {createRoot} from "react-dom/client";

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
    "build": "webpack --mode development --devtool source-map",
    ...
  }
  ...
}
```
11. execute `npm run build` to do an initial build of the frontend
12. navigate to http://localhost:8000 in your web browser and you should see this:
![phase2](https://github.com/DylanCheetah/reactive-calculator/blob/e0424c01a428a99339c125d4befcca0977639866/screenshots/phase2.png)


### Phase 3: Setup Bootstrap
To help us create a good layout and theme for our calculator, we will next setup Bootstrap. Bootstrap provides many layout and theme utilities that will be very helpful to us.

1. execute `npm install --save-dev bootstrap`
2. open `src/index.js` and add an additional import like this:
```js
...
import React from "react";
import {createRoot} from "react-dom/client";

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


### Phase 4: Basic UI Layout
Now that we have our minimal backend, React, and Bootstrap setup, let's start designing the UI layout for our calculator. Bootstrap has a powerful grid based layout system that helps arrange UI elements. It also provides utilities for creating themes more easily.

1. create a `components` folder inside `src`
2. create `src/components/Display.js` with the following content:
```js
/*
 * Reactive Calculator - Display Component
 *
 * This component displays the current output of the calculator.
 */

import React from "react";


// Define display component
function Display({value}) {
    return (
        <div className="col m-1">
            <input className="form-control text-end" value={value}/>
        </div>
    );
}


export default Display;
```
3. create `src/components/NumberButton.js` with the following content:
```js
/*
 * Reactive Calculator - Number Button Component
 *
 * This component is used to input a number.
 */

import React from "react";


// Define number button component
function NumberButton({value}) {
    // Calculate layout
    let layout = "col";

    if(["0"].indexOf(value) > -1) {
        layout = "col-8";
    }

    return (
        <button className={layout + " m-1 btn btn-primary"}>{value}</button>
    );
}


export default NumberButton;
```
4. create `src/components/OperatorButton.js` with the following content:
```js
/*
 * Reactive Calculator - Operator Button Component
 *
 * This component is used to input a math operation.
 */

import React from "react";


// Define operator button component
function OperatorButton({op}) {
    // Calculate layout
    let layout = "col";

    if(["+", "="].indexOf(op) > -1) {
        layout = "col-2";
    }

    return (
        <button className={layout + " m-1 btn btn-primary"}>{op}</button>
    );
}


export default OperatorButton;
```
5. update the body of the app component in `src/App.js` like this:
```js
...
function App() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4">
                    <div className="row">
                        <Display value="Display"/>
                    </div>
                    <div className="row">
                        <OperatorButton op="C"/>
                        <OperatorButton op="/"/>
                        <OperatorButton op="*"/>
                        <OperatorButton op="-"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <NumberButton value="7"/>
                                <NumberButton value="8"/>
                                <NumberButton value="9"/>
                            </div>
                            <div className="row">
                                <NumberButton value="4"/>
                                <NumberButton value="5"/>
                                <NumberButton value="6"/>
                            </div>
                        </div>
                        <OperatorButton op="+"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <NumberButton value="1"/>
                                <NumberButton value="2"/>
                                <NumberButton value="3"/>
                            </div>
                            <div className="row">
                                <NumberButton value="0"/>
                                <OperatorButton op="."/>
                                <OperatorButton op="+/-"/>
                            </div>
                        </div>
                        <OperatorButton op="="/>
                    </div>
                </div>
            </div>
        </div>
    );
}
...
```
6. now build the frontend again
7. navigate to http://localhost:8000 in your web browser and you should see the following:
![phase4](https://github.com/DylanCheetah/reactive-calculator/blob/d70a750d18ba91b1ae86f768bddc2f41d02e4f06/screenshots/phase4.png)


### Phase 5: Application Logic
Now that we have created the UI layout for our application, we need to define its logic. In order to create the application logic for our calculator app, we will need to be able to manipulate the state of the application via multiple components. One way we can do this is by using a reducer. A reducer is a function that is used to update the state of an application or single component based on the current state and an action object. The reducer and state will need to be available to multiple components. The best way to do this is to utilize contexts to pass the state and dispatch function to multiple components regardless of their depth in the component tree.

01. create `src/context.js` with the following content:
```js
/*
 * Reactive Calculator - Contexts
 *
 * This script defines the contexts for application state and dispatch.
 */

import {createContext} from "react";


// Create application state and dispatch contexts
export const CalculatorStateCtx = createContext(null);
export const CalculatorDispatchCtx = createContext(null);
```
02. open `src/App.js`
03. edit your imports like this:
```js
import React, {useReducer} from "react";

import {CalculatorStateCtx, CalculatorDispatchCtx} from "./Contexts";
import Display from "./components/Display";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";
```
04. below your imports, add this code:
```js
// Define initial calculator state
const initialState = {
    input: "",
    operand1: "",
    operation: ""
};
```
05. next add the `solve` function:
```js
// Define utility functions
function solve(state) {
    // Ignore this action if the input is empty
    if(state.input == "") {
        return state;
    }

    // Parse both operands
    const a = parseFloat(state.operand1);
    const b = parseFloat(state.input);

    // Solve the equation
    let c;

    switch(state.operation) {
        case "+":
            c = a + b;
            break;

        case "-":
            c = a - b;
            break;

        case "*":
            c = a * b;
            break;

        case "/":
            c = a / b;
            break;

        default:
            return state;
    }

    return {
        ...state,
        input: c.toString(),
        operand1: "",
        operation: ""
    };
}
```
06. then add the `reducer` function:
```js
// Define calculator reducer
function reducer(state, action) {
    // Handle action
    switch(action.type) {
        case "PUSH_INPUT":
            return {
                ...state,
                input: state.input + action.value
            };

        case "PUSH_DECIMAL":
            return {
                ...state,
                input: state.input.replaceAll(".", "") + "."
            };

        case "TOGGLE_SIGN":
            // Ignore this action if the input is empty
            if(["", "."].indexOf(state.input) > -1) {
                return state;
            }

            return {
                ...state,
                input: (-parseFloat(state.input)).toString()
            };

        case "CLEAR":
            return {
                ...state,
                input: "",
                operand1: "",
                operation: ""
            };

        case "ADD":
            // Ignore this action if the input is empty
            if(["", "."].indexOf(state.input) > -1) {
                return state;
            }

            // Chain operation?
            if(state.operand1 != "" && state.operation != "") {
                // Solve the equation and set the operation for the next step in the chain
                const tmpState = solve(state);
                return {
                    ...tmpState,
                    input: "",
                    operand1: tmpState.input,
                    operation: "+"
                };
            }

            return {
                ...state,
                input: "",
                operand1: state.input,
                operation: "+"
            };

        case "SUBTRACT":
            // Ignore this action if the input is empty
            if(["", "."].indexOf(state.input) > -1) {
                return state;
            }

            // Chain operation?
            if(state.operand1 != "" && state.operation != "") {
                // Solve the equation and set the operation for the next step in the chain
                const tmpState = solve(state);
                return {
                    ...tmpState,
                    input: "",
                    operand1: tmpState.input,
                    operation: "-"
                };
            }

            return {
                ...state,
                input: "",
                operand1: state.input,
                operation: "-"
            };
        
        case "MULTIPLY":
            // Ignore this action if the input is empty
            if(["", "."].indexOf(state.input) > -1) {
                return state;
            }

            // Chain operation?
            if(state.operand1 != "" && state.operation != "") {
                // Solve the equation and set the operation for the next step in the chain
                const tmpState = solve(state);
                return {
                    ...tmpState,
                    input: "",
                    operand1: tmpState.input,
                    operation: "*"
                };
            }

            return {
                ...state,
                input: "",
                operand1: state.input,
                operation: "*"
            };

        case "DIVIDE":
            // Ignore this action if the input is empty
            if(["", "."].indexOf(state.input) > -1) {
                return state;
            }

            // Chain operation?
            if(state.operand1 != "" && state.operation != "") {
                // Solve the equation and set the operation for the next step in the chain
                const tmpState = solve(state);
                return {
                    ...tmpState,
                    input: "",
                    operand1: tmpState.input,
                    operation: "/"
                };
            }

            return {
                ...state,
                input: "",
                operand1: state.input,
                operation: "/"
            };

        case "SOLVE":
            return solve(state);

        default:
            return state;
    }
}
```
07. now we need to modify the body of our app component like this:
```js
// Define app component
function App() {
    // Initialize reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CalculatorStateCtx.Provider value={state}>
            <CalculatorDispatchCtx.Provider value={dispatch}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="row">
                                <Display value="Display"/>
                            </div>
                            <div className="row">
                                <OperatorButton op="C"/>
                                <OperatorButton op="/"/>
                                <OperatorButton op="*"/>
                                <OperatorButton op="-"/>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <NumberButton value="7"/>
                                        <NumberButton value="8"/>
                                        <NumberButton value="9"/>
                                    </div>
                                    <div className="row">
                                        <NumberButton value="4"/>
                                        <NumberButton value="5"/>
                                        <NumberButton value="6"/>
                                    </div>
                                </div>
                                <OperatorButton op="+"/>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <NumberButton value="1"/>
                                        <NumberButton value="2"/>
                                        <NumberButton value="3"/>
                                    </div>
                                    <div className="row">
                                        <NumberButton value="0"/>
                                        <OperatorButton op="."/>
                                        <OperatorButton op="+/-"/>
                                    </div>
                                </div>
                                <OperatorButton op="="/>
                            </div>
                        </div>
                    </div>
                </div>
            </CalculatorDispatchCtx.Provider>
        </CalculatorStateCtx.Provider>
    );
}
```
08. save your changes and close the file
09. update `src/components/Display.js` like this:
```js
/*
 * Reactive Calculator - Display Component
 *
 * This component displays the current output of the calculator.
 */

import React, {useContext} from "react";

import {CalculatorStateCtx} from "../Contexts";


// Define display component
function Display() {
    // Initialize state context
    const state = useContext(CalculatorStateCtx);

    return (
        <div className="col m-1">
            <input className="form-control text-end" value={state.input} readOnly={true}/>
        </div>
    );
}


export default Display;
```
10. update `src/components/NumberButton.js` like this:
```js
/*
 * Reactive Calculator - Number Button Component
 *
 * This component is used to input a number.
 */

import React, {useContext} from "react";

import {CalculatorDispatchCtx} from "../Contexts";


// Define number button component
function NumberButton({value}) {
    // Initialize dispatch context
    const dispatch = useContext(CalculatorDispatchCtx);

    // Calculate layout
    let layout = "col";

    if(["0"].indexOf(value) > -1) {
        layout = "col-8";
    }

    // Define event handlers
    const handleClick = (event) => {
        // Dispatch push input action
        dispatch({
            type: "PUSH_INPUT",
            value: value
        });
    };

    return (
        <button className={layout + " m-1 btn btn-primary"} onClick={handleClick}>{value}</button>
    );
}


export default NumberButton;
```
11. update `src/components/OperatorButton.js` like this:
```js
/*
 * Reactive Calculator - Operator Button Component
 *
 * This component is used to input a math operation.
 */

import React, {useContext} from "react";

import {CalculatorDispatchCtx} from "../Contexts";


// Define operator button component
function OperatorButton({op}) {
    // Initialize dispatch context
    const dispatch = useContext(CalculatorDispatchCtx);

    // Calculate layout
    let layout = "col";

    if(["+", "="].indexOf(op) > -1) {
        layout = "col-2";
    }

    // Define event handlers
    const handleClick = (event) => {
        // Choose action based on operation type
        switch(op) {
            case "C":
                // Dispatch clear action
                dispatch({
                    type: "CLEAR"
                });
                break;

            case ".":
                // Dispatch push decimal action
                dispatch({
                    type: "PUSH_DECIMAL"
                });
                break;

            case "+/-":
                // Dispatch toggle sign action
                dispatch({
                    type: "TOGGLE_SIGN"
                });
                break;

            case "+":
                // Dispatch add action
                dispatch({
                    type: "ADD"
                });
                break;

            case "-":
                // Dispatch subtract action
                dispatch({
                    type: "SUBTRACT"
                });
                break;
            
            case "*":
                // Dispatch multiply action
                dispatch({
                    type: "MULTIPLY"
                });
                break;

            case "/":
                // Dispatch divide action
                dispatch({
                    type: "DIVIDE"
                });
                break;

            case "=":
                // Dispatch solve action
                dispatch({
                    type: "SOLVE"
                });
                break;
        }
    };

    return (
        <button className={layout + " m-1 btn btn-primary"} onClick={handleClick}>{op}</button>
    );
}


export default OperatorButton;
```
12. now build the frontend again
13. navigate to http://localhost:8000 in your web browser and you should be able to use the calculator and get output like this:
![phase5](https://github.com/DylanCheetah/reactive-calculator/blob/8beacb1ed43890304798404fc3e3b111e3831332/screenshots/phase5.png)


### Phase 6: Improve UX
As it is right now, our calculator will not display the result of the last operation when we chain operations like `8 * 2 + 5`. We have to press the equal key before the result will be available. However, we can improve our display component so it shows the result of the last portion of the current equation as well as the current math operation. This will enhance the user experience (UX).

1. open `src/components/Display.js`
2. change the input element in your display component like this:
```js
...
<div className="col m-1">
    <input className="form-control text-end" value={`${state.operand1} ${state.operation} ${state.input}`} readOnly={true}/>
</div>
...
```
3. build the frontend again
4. navigate to http://localhost:8000 in your web browser and you should see the finished calculator:


### Phase 7: Add App Icon
For the last phase of this tutorial, we will add an application icon. The application icon will be displayed on the browser tab and in the favorites list for our web app. To add an application icon to a web app, simply draw an icon with software such as GIMP and save it as `public/favicon.ico` within the project folder. Our calculator app is now complete.
