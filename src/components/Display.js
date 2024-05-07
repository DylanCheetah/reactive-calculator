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
            <input className="form-control text-end" value={`${state.operand1} ${state.operation} ${state.input}`} readOnly={true}/>
        </div>
    );
}


export default Display;
