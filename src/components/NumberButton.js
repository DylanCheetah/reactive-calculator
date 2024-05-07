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
