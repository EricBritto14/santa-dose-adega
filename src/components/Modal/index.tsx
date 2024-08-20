import './style.sass';

const Modal = ({ isOpen, children } : { isOpen:boolean, children:any }) => {
    return(
        <>
            {
                isOpen && (
                    <div id='modal-component-backgraund'>
                        <div id='modal-component-content'>
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Modal;