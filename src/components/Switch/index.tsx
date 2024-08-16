import React, { useState } from "react";

import "./style.sass";

const Switch = ({ value, setValue } : { value : boolean, setValue : any }) => {
    const styleActive = {
        animationName: "circle-activation-animation",
        animationDuration: "0.3s",
        animationFillMode: "forwards",
    }

    const styleDisable = {
        animationName: "circle-disable-animation",
        animationDuration: "0.3s",
    }

    return (
        <div 
            id="switch-component-main" 
            onClick={() => setValue(!value)}
            style={ value ? { backgroundColor: "#37B904" } : { backgroundColor: "#E11D48" } }
        >
            <div 
                id="switch-radio-circle" 
                style={ value ? styleActive : styleDisable }
            />
        </div>
    )
}

export default Switch;