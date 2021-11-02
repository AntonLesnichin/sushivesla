import React from "react";
import { NavLink } from "react-router-dom";

import Sets from "../../images/main/col1/col1_sets.png"



const BodyFirst = () => (
    <div className="main__col main__col--first">
    <NavLink className="img__hover" to={'/goods'}>
        <img className="col1___img" src={Sets} alt=""/>
        <div className="col1__text">Сеты</div>
    </NavLink>
   
    
</div>
);


export default BodyFirst;