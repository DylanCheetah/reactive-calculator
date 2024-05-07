/*
 * Reactive Calculator - App Component
 *
 * This is the app component for the calculator.
 */

import React, {useReducer} from "react";

import {CalculatorStateCtx, CalculatorDispatchCtx} from "./Contexts";
import Display from "./components/Display";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";


// Define initial calculator state
const initialState = {
    input: "",
    operand1: "",
    operation: ""
};


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
            if(state.input == "") {
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
            // Chain operation?
            if(state.operand1 != "" && state.operation != "" && state.input != "") {
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
            // Chain operation?
            if(state.operand1 != "" && state.operation != "" && state.input != "") {
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
            // Chain operation?
            if(state.operand1 != "" && state.operation != "" && state.input != "") {
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
            // Chain operation?
            if(state.operand1 != "" && state.operation != "" && state.input != "") {
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


export default App;
