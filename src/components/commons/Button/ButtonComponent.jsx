import React from "react";
import './ButtonComponent.scss'
function ButtonComponent({
  type,
  name,
  placeholder,
  label,
  error,
  value,
  handleclick,
  className,
  icon
}) {
  return (
    <>
      <button
        name={name}
        className={className || "btn"}
        onClick = {handleclick}
      >
         {icon ? <span className = 'btn-icon'>
             <img src={icon}/> 
        </span>:value}
      </button>
    </>
  );
}

export default ButtonComponent;
