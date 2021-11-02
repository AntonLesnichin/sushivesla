import React from "react";
import Logo from "../../images/header/logo.png";
import { NavLink } from "react-router-dom";


const HeaderLeft = ({onClick, city, phone, lk, sList}) => {


    return (
        
    <div className="header__left">
        <NavLink className="header__logo" to={'/'}>
            <img className="header__img" src={Logo} alt=""/>
        </NavLink>
        
    <div className="header__location">
        <div className="location__item">
            <div  className="location__content" onClick={onClick} id="city">
                <a className="location__text">{city}</a>
                            
             <span className={sList === false ? "location__icon active" : "location__icon"}>
                    <i className="fas fa-angle-down"></i>
                </span>
            </div>
            <div className="location__item">
            <a href="#" className="location__text">{phone}</a>
        </div>
        </div>

        <div className="location__item">
            <a href="#" className="location__text">{lk}
                <span className="location__icon location__icon--man">
                    <i className="fas fa-user-alt"></i>
                </span>
            </a>
        </div>

    </div>
    </div>
    )

};


export default HeaderLeft;