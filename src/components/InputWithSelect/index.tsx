import React, { useState, useEffect } from "react";
import Select from "react-select";

import { styleSelect } from "@Components/InputWithSelect/styleSelect.const";
import { TypeSelect } from "@Utils/selects.const";

import "./style.sass";

const InputWithSelect = ({
    title, 
    type='text',
    value, 
    setValue, 
    width='100%',
    options,
 } : { 
    title: string, 
    type?: string, 
    value: TypeSelect, 
    setValue: any, 
    width: string,
    options: TypeSelect[]
  }) => {
    const [numberPart, setNumberPart] = useState<number>(0);
    const [unitPart, setUnitPart] = useState<string>("");

    useEffect(() => {
        options.forEach((option) => {
            if(value && value.value.toString().indexOf(`${option.value}`) !== -1) {
                let firstPart : string = value.value.toString().split(`${option.value}`)[0];
                let secundPart : string = value.value.toString().split(firstPart)[1];

                setNumberPart(parseFloat(firstPart));
                setUnitPart(secundPart);
            }
        });
    }, [value]);

    useEffect(() => {
        setValue(`${numberPart}${unitPart}`);
    }, [numberPart, unitPart]);

    return (
        <div id="input-with-select-component-main" style={{ width : width }}>
            <label>{title}</label>
            <div id="input-with-select-content">
                <input 
                    type={type} 
                    value={numberPart}
                    onChange={(element) => setNumberPart(parseFloat(element.target.value))}
                />
                <Select
                    styles={styleSelect}
                    value={{ label: unitPart, value: unitPart } as TypeSelect}
                    onChange={(element) => setUnitPart(`${element!.value}`)}
                    options={options}
                />
                {/* <div style={{ maxHeight: "40px", border: '1px solid black', display: 'flex', flexDirection: 'column' }}>
                    
                </div> */}
            </div>
        </div>
    )
}

export default InputWithSelect;