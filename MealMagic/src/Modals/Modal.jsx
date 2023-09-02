import  ReactDOM  from 'react-dom';
import { Fragment } from "react";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className='backdrop' />;
};
const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('CartOverlay');
const Modal = (props) => {
    return <Fragment>
      {ReactDOM.createPortal(<Backdrop/>,portalElement)}  
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)} 
    </Fragment>
};

export default Modal;