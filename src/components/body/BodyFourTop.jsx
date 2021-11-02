import React from "react";
import { NavLink } from "react-router-dom";


const BodyFourTop = ({text,img}) => (
     <div className="four__top">
        <div className="four__top--div">
            <NavLink to={'/goods'}>
                 <img className="four__top--img" src={img} alt=""/>
            </NavLink>
        </div>
        <span className="four__top--text">{text}</span>
    </div>
);



export default BodyFourTop;