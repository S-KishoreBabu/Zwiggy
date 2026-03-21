import React from 'react'
import { createPortal } from 'react-dom'
const Modal = ({children}) => {
    const modalDiv = document.getElementById("modal-root");
  return createPortal(
    <div className='w-100 h-10 p-2 bg-amber-200 fixed z-999 top-0'>
        {children}
    </div>
  ,modalDiv);
}

export default Modal