import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./components/header/Header.jsx";
import Body from "./components/body/Body.jsx";
import Footer from "./components/footer/Footer.jsx";
import Goods from "./components/goods/Goods.jsx";

import "./fontawesome/css/all.css"
import './css/style.css';
import './css/style-goods.css';


function App() {
  const [rolls, setRolls] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((resp) => resp.json())
    .then((json) => {
      setRolls(json.rolls)
    })

  }, [])

  const [navActive, setNavActive] = React.useState(false);

  const fdf = () => {
      setNavActive(true)
  };

  return (
    <div className="App">

<Router>
      <Header navAct={navActive}/>
        <Switch>
          <Route exact path="/" render={() => <Body {...setNavActive(true)} />} />
          <Route path="/goods" render={() => <Goods items={rolls} {...setNavActive(false)} />} />
          <Redirect to="/" />
        </Switch>
      <Footer />
</Router>
      

    </div>
  );
  
}

export default App;
