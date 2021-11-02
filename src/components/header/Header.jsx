import React from "react";
import HeaderLeft from "./HeaderLeft.jsx";
import HeaderList from "./HeaderList.jsx";
import HeaderNav from "./HeaderNav.jsx";
import HeaderRight from "./HeaderRight.jsx";


const Header = ({navAct}) => {

    const [visibleList, setVisibleList] = React.useState(false);


    return (
    <header className="header">

        <div className="container">

            <div className="header__inner">

                <HeaderLeft sList={visibleList} onClick={() => setVisibleList(!visibleList)} city="Волгоград" phone="8-800-550-30-30" lk="Личный кабинет" />

                {!visibleList && 
                <HeaderList sList={visibleList}/> }

                {!navAct && 
                <HeaderNav items={[
                    "Онигири",
                    "Воки",
                    "Поке и салаты",
                    "Роллы",
                    "Еще"]}
                    onClickItem={(name) => console.log(name)} />
                }
                <HeaderRight />


            </div>
        </div>
    </header>
    )
};


export default Header;