import React from "react";
import { Add, Remove } from '@mui/icons-material';

import './style.sass';

const SelectNumber = ({ 
    width='100%',
    title,
    value,
    setValue
 } : { 
    width? : string,
    title : string,
    value : number,
    setValue : any
  }) => {

    return (
        <div id='select-number-component-main' style={{ width : width }}>
            <label>{title}</label>
            <div id='select-number-component-content'>
                <Add onClick={() => setValue(parseInt(value.toString()) + 1)} />
                <input type="number" value={value} onChange={(element) => setValue(element.target.value)}/>
                <Remove onClick={() => {
                    if(value > 1) setValue(value - 1); 
                }} />
            </div>
        </div>
    )
}

export default SelectNumber;