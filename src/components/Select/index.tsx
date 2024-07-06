import React from 'react';

import { TypeSelect } from '@Utils/selects.const';

import './style.sass';

const Select = ({ 
    title, 
    value, 
    setValue, 
    selectList,
    width='100%'
} : { 
    title : string,
    type?: string, 
    value : string | number, 
    setValue : any, 
    selectList : TypeSelect[],
    width? : string,
}) => {  
    return (
        <div id='select-component-main' style={{ width: width }}>
            <label>{title}</label>
            <select 
                value={value}
                onChange={(element) => setValue(element.target.value)}
            >
                {
                    selectList.map((selectElement) => (
                        <option
                            value={selectElement.value}
                        >
                            {selectElement.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select;