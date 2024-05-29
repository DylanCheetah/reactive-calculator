/*
 * Reactive Calculator - Operator Button Component
 *
 * This component is used to input a math operation.
 */

import React, {useContext} from "react";

import {CalculatorDispatchCtx} from "../context";


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
