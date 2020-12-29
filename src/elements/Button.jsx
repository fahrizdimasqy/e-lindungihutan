import React from "react";
import propTypes from "prop-types";

function Button(props) {
  // className default adalah btn
  const className = ["btn"];

  // ketika kondisi props = isPrimary maka tambahkan className btn-primary
  if (props.isPrimary) {
    className.push("btn-primary");
  }

  return (
    <div>
      {/* menjoinkan className yang ada dan mengembalikan semua children yang parent punya */}
      <button type="submit" className={className.join(" ")}>
        {props.children}
      </button>
    </div>
  );
}

Button.propTypes = {
  isPrimary: propTypes.bool,
};

export default Button;
