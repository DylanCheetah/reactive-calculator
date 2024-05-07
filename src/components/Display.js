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
