/*
 * Reactive Calculator - Display Component
 *
 * This component displays the current output of the calculator.
 */

import React, {useContext} from "react";

import {CalculatorStateCtx} from "../context";


// Define display component
function Display() {
    // Initialize state context
    const state = useContext(CalculatorStateCtx);

    return (
        <input className="col m-1 form-control text-end" value={`${state.operand1} ${state.operation} ${state.input}`} readOnly={true}/>
    );
}


export default Display;
