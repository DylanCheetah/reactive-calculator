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
