import React from "react"
import MediaQuery from "react-responsive"

import beach1 from "../images/beach1.jpg"
import beach2 from "../images/beach2.jpg"
import beach3 from "../images/beach3.jpg"
import beach4 from "../images/beach4.jpg"
import beach5 from "../images/beach5.jpg"
import beach6 from "../images/beach6.jpg"
import beach7 from "../images/beach7.jpg"
import beach8 from "../images/beach8.jpg"

import sigLogo from "../images/sig-logo.jpg"

const Test = () => {
    
    return (
        <div style={{textAlign: "center"}} >
            
            <img 
             id="brand" src={sigLogo} alt="signatureLogo" />
        </div>
    )
}

export default Test;