import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const clickHandle = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={clickHandle}>
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
