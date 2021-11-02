import React from "react";

const FooterLeft = () => (
    <div className="footer__left">
    <div className="footer__social">
        <div className="social__item">
            <i className="fab fa-facebook-square"></i>
        </div>
        <div className="social__item">
            <i className="fab fa-vk"></i>
        </div>
        <div className="social__item">
            <i className="fab fa-odnoklassniki-square"></i>
        </div>
        <div className="social__item">
            <i className="fab fa-instagram"></i>
        </div>
    </div>
    
    <div className="footer__location">
        <div className="footer__location--icon">
            <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="footer__location--text">Ближайшие СушиВёсла</div>
    </div>
</div>
)

export default FooterLeft;