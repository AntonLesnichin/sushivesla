import React from "react"

const HeaderNav = ({ items, onClickItem }) => {

    
    const [selection, setSelection] = React.useState(null);

    const onSelect = (index) => {
            setSelection (index)
    }



return (
<div className="header__middle">
        <a href="#" onClick={() => onSelect(null)} className={selection === null ? "header__middle--link active" : "header__middle--link"}>Сеты</a>

        {items && items.map((name, index) =>
            <a onClick={() => onSelect(index)} className={selection === index ? "header__middle--link active" : "header__middle--link"} key={`${name}_${index}`}>{name}</a>)
        }


    </div>
)
}

export default HeaderNav;