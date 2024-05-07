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
