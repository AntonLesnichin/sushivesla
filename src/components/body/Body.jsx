import React from "react";
import BodyFirst from "./BodyFirst.jsx";
import BodySecond from "./BodySecond.jsx";
import BodyThird from "./BodyThird.jsx";
import BodyFour from "./BodyFour.jsx";



const Body = () => (


<section className="section">
    <div className="container">
        <div className="main">

          <BodyFirst/>
          <BodySecond/>
          <BodyThird/>
          <BodyFour/>

        </div>
    </div>
</section>
)

export default Body;