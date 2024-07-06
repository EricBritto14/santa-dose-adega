import React from 'react';

import './style.sass';

const Modal = ({ isOpen, setOpen, children } : { isOpen:boolean, setOpen:any, children:any }) => {
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