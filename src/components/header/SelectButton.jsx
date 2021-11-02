import React from "react";
import classNames from "classnames";

const SelectButton = ({onClick, text, active}) => (
    
    <button href="#" className={classNames('select__btn--item',{
        'active': active,
    })} type = "text" >{text}</button>

);

export default SelectButton;