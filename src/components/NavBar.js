import React from "react"
import "./navbar.css";

import sigLogo from "../images/sig-logo.jpg"

const NavBar = () => {
    
    return (
        <div>
            <img id="brand" src={sigLogo} alt="signatureLogo" />

            <div className="navbar">   
                <span id="musicLink" >Music</span>
                <span id="blogLink">Blog</span>
                <span id="aboutLink">About</span>
                <span id="socialsLink">Socials</span>
            </div>
        </div>
        
    )
}

export default NavBar