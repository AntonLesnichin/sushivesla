import React from "react";
import { NavLink } from "react-router-dom";

import Wok from "../../images/main/col3/wok_desktop.png"
import LeafTop from "../../images/main/col3/wok_top_leaf_desktop.png"
import LeafBottom from "../../images/main/col3/wok_bottom_leaf_desktop.png"


const BodyThird = () => (
    <div className="main__col main__col--third">
        <NavLink to={'/goods'}>
            <div className="third__item">
                <div className="third__title">вок конструк тор</div>
                <div className="third__subtitle">собери свой</div>
            </div>
            <img className="third__img--top" src={LeafTop} alt=""/>
                <img className="third__img" src={Wok} alt=""/>
            <img className="third__img--bottom" src={LeafBottom} alt=""/>
        </NavLink>
    </div>

);

export default BodyThird;