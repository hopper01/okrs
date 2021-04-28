import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  border: "10px solid #FFF",
  borderRadius: "25px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ title, children, onClick }) {
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className='modal'>
        <h2>{title}</h2>
        <br />
        <button onClick={onClick}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
