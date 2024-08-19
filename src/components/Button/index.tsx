import React from "react";

import './style.sass'

const Button = ({ 
    title, 
    style = "primary", 
    type = "button",
    width = "100%",
} : { 
    title : string,
    style? : "primary" | "second" | "third",
    type? : "submit" | "reset" | "button" | undefined
    width? : string,
}) => {

    return (
        <button 
            type={type} 
            id={`btn-component-${style}-style`}
            style={{ width: width }}
        >
            {title}
        </button>
    )
}

export default Button;