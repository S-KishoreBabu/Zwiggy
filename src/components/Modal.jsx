import React from 'react'
import ReactDom from "react-dom"
const Modal = ({children}) => {
  const modalRoot = document.getElementById("modal-root");
    return ReactDom.createPortal(<div className="modal">{children}</div>,modalRoot)
}

export default Modal