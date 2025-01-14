import React from "react";

import { observer } from "mobx-react";

const Footer = observer(() =>   {


    

    return(
        <div className="footer">
            <div className="footer__content">
                <img className="footer__image" src="./assets/ffos.png" alt="FFOS Logo" />
                <span className="footer__caption">FFOS 2024</span>
            </div>
        </div>
    )
})

export default Footer;