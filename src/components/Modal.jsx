import React from 'react'
import {createPortal} from 'react-dom'
const Modal = ({children}) => {
    const Modaldiv = document.getElementById("modal-root");
    return createPortal(
        <div id="popUp" className='z-9999 bg-amber-50 shadow  fixed top-0 h-10 p-2 w-100'>
            {children}
        </div>
    , Modaldiv)
}

export default Modal