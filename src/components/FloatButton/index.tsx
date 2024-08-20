import './style.sass';

const FloatButton = ({onFunction, icon} : {onFunction : any, icon: any}) => {
    return(
        <button onClick={onFunction} id="float-action-component" >
            {icon}
        </button>
    )
}

export default FloatButton;