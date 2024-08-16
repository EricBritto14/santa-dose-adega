import React,  { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
    const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false);

    return (
        <div id='input-component-main' style={{ width: width }}>
            <label>{title}</label>
            <div id='input-component-container'>
                <input 
                    type={type === "password" && visibilityPassword ? "text" : type} 
                    value={value}
                    onChange={(element) => setValue(element.target.value)}
                />
                {
                    type === "password" && (
                        visibilityPassword ? (
                            <Visibility onClick={() => setVisibilityPassword(!visibilityPassword)}/>
                        ) : (
                            <VisibilityOff onClick={() => setVisibilityPassword(!visibilityPassword)}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Input;