import React from "react";
import SecondItemRight from "./SecondItemRight.jsx";
import SecondItemLeft from "./SecondItemLeft.jsx";

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../images/main/col2/', false, /\.(png|jpe?g|svg)$/));


const BodySecond = () => (
    <div className="main__col main__col--second">


    <SecondItemLeft text="Роллы" img={images[0].default} lr="second__text"/>
    <SecondItemRight text="Суши" img={images[1].default} lr="second__text"/>
    <SecondItemLeft text="Жаренные роллы" img={images[2].default} lr="second__text second__text--left"/>
    <SecondItemRight text="Запеченые роллы" img={images[3].default} lr="second__text second__text--right"/>
        
    
</div>
);

export default BodySecond;