import React from "react";
import FooterLeft from "./FooterLeft.jsx"
import FooterCenter from "./FooterCenter.jsx"
import FooterRight from "./FooterRight.jsx"

const Footer = () => (
<footer className="footer">
    <div className="container">
        <div className="footer__inner">

          <FooterLeft/>
          <FooterCenter/>
          <FooterRight/>
        
        </div>
    </div>
</footer>
)

export default Footer;