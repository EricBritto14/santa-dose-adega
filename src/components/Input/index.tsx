import React from 'react';

import './style.sass';

const Input = ({ 
    title, 
    type='text', 
    value, 
    setValue, 
    width='100%' 
} : { 
    title : string,
    type?: string, 
    value : string | number, 
    setValue : any, 
    width? : string 
}) => {  
    return (
        <div id='input-component-main' style={{ width: width }}>
            <label>{title}</label>
            <input 
                type={type} 
                value={value}
                onChange={(element) => setValue(element.target.value)}
            />
        </div>
    )
}

export default Input;