import React from "react";
import Ikra from "../../images/header/egg.svg";


const HeaderRight = () => (

    <div className="header__right">
        <div className="header__info">
            
                <a href="#" className="info__text">О компании</a>
                <a href="#" className="info__text">Условия доставки</a><br/>
                <a href="#" className="info__text">Пользовательское соглашение</a>
                
        </div>
        <div className="header__ikra">
            <button href="#" className="header__ikra--btn" type = "text" >
                <span>Икринки</span>
                <img className="header__ikra--img" src={Ikra} alt=""/>
            </button>
        </div>
        <div className="header__basket">
                <i className="fas fa-shopping-basket"></i>
        </div>
    </div>

);

export default HeaderRight;