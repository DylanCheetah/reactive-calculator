/*
 * Reactive Calculator - App Component
 *
 * This is the app component for the calculator.
 */

import React from "react";

import Display from "./components/Display";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";


// Define app component
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


export default App;
