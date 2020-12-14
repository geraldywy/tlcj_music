import React from "react"
import "./navbar.css";

import {Link} from "react-router-dom"

import sigLogo from "../images/sig-logo.jpg"

const NavBar = (props) => {
    
    return (
        <div>
            <Link to="/"><img id="brandTopLeft" src={sigLogo} alt="signatureLogo" /></Link>

            <div className={props.mobile ? "navbarMobile" : "navbar"}>   
                <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="musicLinkTop" >Music</span>
                <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="blogLinkTop" >Blog</span>
                <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="aboutLinkTop" >About</span>
                <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="socialsLinkTop" >Socials</span>
            </div>
        </div>
        
    )
}

export default NavBar