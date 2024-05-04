/*
 * Reactive Calculator - Frontend Entrypoint
 *
 * This is the entrypoint for the frontend.
 */

import React from "react";
import {createRoot} from "react-dom";

import App from "./App";
import "./styles.scss";


// Create React root
const root = createRoot(document.querySelector("#root"));
root.render(<App/>);
