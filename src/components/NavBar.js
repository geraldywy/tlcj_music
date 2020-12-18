import React from "react"
import "./navbar.css";

import {Link} from "react-router-dom"
import Headroom from "react-headroom"

const NavBar = (props) => {
    
    const sigLogo = process.env.REACT_APP_SERVER_URL + "/static/images/sig-logo.jpg"

    return (
        <Headroom>
            <nav>
                <Link to="/"><img id="brandTopLeft" src={sigLogo} alt="signatureLogo" /></Link>

                <div className={props.mobile ? "navbarMobile" : "navbar"}>   
                    <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="musicLinkTop" >Music</span>
                    <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="blogLinkTop" >Blog</span>
                    <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="aboutLinkTop" >About</span>
                    <span className={props.mobile ? "navbarMobileItem": "navbarItem"} id="socialsLinkTop" >Socials</span>
                </div> 
            
            </nav> 
        </Headroom>
           
    )
}

export default NavBar