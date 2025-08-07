import React from "react";

const Button = ({ buttonText, reqTytpe, setReqType }) => {
  return (
    <button
      className={buttonText === reqTytpe ? "selected" : null}
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
