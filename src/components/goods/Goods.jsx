import React from "react";
import GoodsCard from "./GoodsCard";

const Goods = ({items}) => {

    return(
        <div className="main__cards">
            <div className="container">
                <div className="cards__item">

                {items.map(obj =>
                <GoodsCard key={obj.id} {...obj}/>
                )}
                    
                </div>
            </div>
        </div>
    )
};

export default Goods;