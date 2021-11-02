import React from "react";
import SelectButton from "./SelectButton.jsx";


const HeaderList = () => {

    return (
        <div className="select" id="select">
            <h3>Ваш город:</h3>
            <h2>Волгоград</h2>
            <div className="select__btn">
                <SelectButton active text="Да, спасибо"/>
                <SelectButton text="Нет, другой"/>
            </div>
        </div>
    )
};

export default HeaderList;