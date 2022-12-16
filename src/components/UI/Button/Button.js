import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} style ={{color: !props.valid ? "red" : "white"}} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
