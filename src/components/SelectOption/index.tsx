import React from 'react';
import Select from 'react-select';

import { TypeSelect } from '@Utils/selects.const';
import { selectStyle } from '@Components/SelectOption/style.const';

import './style.sass';

const SelectOption = ({ 
    title, 
    value, 
    setValue, 
    selectList,
    width='100%'
} : { 
    title : string,
    type?: string, 
    value : TypeSelect, 
    setValue : any, 
    selectList : TypeSelect[],
    width? : string,
}) => {  
    
    return (
        <div id='select-component-main' style={{ width: width }}>
            <label>{title}</label>
            <Select
                styles={selectStyle}
                value={value}
                onChange={(element) => setValue(element!.value)}
                options={selectList}
            />
        </div>
    )
}

export default SelectOption;