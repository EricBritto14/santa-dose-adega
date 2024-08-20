import { useState } from "react";

import './style.sass';

export type OptionMenuType = {
    label : string,
    onPress : any,
    icon : any
}

const Menu = ({
    icon,
    options,
    style = {},
    boxSide = "left",
} : {
    icon : any,
    options : OptionMenuType[],
    style? : any
    boxSide? : "left" | "right"
}) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <div id="menu-component-main" style={style} onClick={() => setOpenMenu(!openMenu)}>
            { icon }

            {
                openMenu && (
                    <ul 
                        id="menu-component-content" 
                        style={ boxSide === "left" ? { right: "0px" } : { left: "0px" } }
                    >
                        {
                            options.map((option, index) => (
                                <li key={index} onClick={option.onPress}>
                                    {option.icon}
                                    {option.label}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Menu;