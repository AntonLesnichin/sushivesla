import React from "react";
import { NavLink } from "react-router-dom";

const SecondItem = ({text, img, lr}) => (

        <div className="second__item">
            <div className="second__item--div">
                <NavLink to={'/goods'}>
                    <img className="second__img second__img--left" src={img} alt=""/>
                </NavLink>
            </div>
            <div className="second__text--div">
                <span className={lr}>{text}</span>
            </div>
        </div>
    
);

export default SecondItem;