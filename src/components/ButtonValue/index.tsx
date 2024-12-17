import './style.sass';

const ButtonValue = ({ 
    title, 
    style = "primary", 
    type = "button",
    width = "100%",
    valueClick, 
    onClick,
} : { 
    title : string,
    style? : "primary" | "second" | "third",
    type? : "submit" | "reset" | "button" | undefined
    width? : string,
    valueClick : string,
    onClick : (value: string) => void
}) => {

    return (
        <button 
            type={type} 
            id={`btn-component-${style}-style`}
            style={{ width: width }}
            onClick={() => onClick(valueClick)}
        >
            {title}
        </button>
    )
}

export default ButtonValue;