import React from "react";
import { NavLink } from "react-router-dom";


const BodyFourBottom = ({img, text, img2}) => (
     <div className="four__bottom">
            <div className="four__item four__item-top">
                <NavLink className="sad" to={'/goods'}>
                    <img className="four__item--img" src={img} alt=""/>
                </NavLink>

                <div className="four__inner">
                    <span className="four__item--text">{text}</span>
                </div>
            </div>
            
            <div className="four__item four__item-bottom"> 

                <div className="four__inner">
                    <span className="four__item--text">напитки</span>
                </div>
            
                <NavLink className="sad" to={'/goods'}>
                    <img className="four__item--nap" src={img2} alt=""/>
                </NavLink>
        
            </div>

    </div>
);



export default BodyFourBottom;