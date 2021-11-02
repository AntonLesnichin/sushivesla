import React from "react";
import BodyFourTop from "./BodyFourTop.jsx"
import BodyFourBottom from "./BodyFourBottom.jsx"
import Soup from "../../images/main/col4/soups_desktop.png"
import Tempura from "../../images/main/col4/tempura_desktop.png"
import Beverages from "../../images/main/col4/beverages_desktop.png"


const BodyFour = () => (
     
    <div className="main__col main__col--four">

        <BodyFourTop img={Soup} text="Супы"/>
        <BodyFourBottom img={Tempura} img2={Beverages} text="темпура" textB="напитки"/>
    
    </div>
);

export default BodyFour;