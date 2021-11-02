import React from "react";

const GoodsCard = ({images, title, text, price}) => {

    // console.log(images);
    
   return(
        <a className="cards__link " href="#">
    <div className="card__inner">
        <div className="card__img">
            <img className="card__img--img" src={images} alt=""/>
            
        </div>
        <div className="card__content">
            <div className="card__title">{title}</div>
            <div className="card__text">{text}</div>
            <div className="card__price">
                <span className="card__many">{price} ₽</span>
                <button className="cars__btn">В корзину</button>
            </div>
        </div>
    </div>
 </a>
)};

export default GoodsCard;