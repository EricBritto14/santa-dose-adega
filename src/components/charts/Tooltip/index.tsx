import './style.sass';

const CustomTooltip = ({ children } : { children : any }) => {
    return (
        <div id="tooltip-component-content">
            {children}
        </div>
    )
}

export default CustomTooltip;