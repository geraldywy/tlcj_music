import React from "react"
import MediaQuery from "react-responsive"

import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"
import pic5 from "../images/pic5.jpg"
import pic6 from "../images/pic6.jpg"
import pic7 from "../images/pic7.jpg"
import pic8 from "../images/pic8.jpg"

import sigLogo from "../images/sig-logo.jpg"
import HomePanel from "./HomePanel"

const Home = () => {
    
    return (
        <div className="appear" >
            <img id="brand" src={sigLogo} alt="signatureLogo" />
            <MediaQuery minDeviceWidth={541}><HomePanel mobile={false} /></MediaQuery>
            <MediaQuery maxDeviceWidth={540}><HomePanel mobile={true} /></MediaQuery>

            <div className="fadingBackgrounds">
                <img src={pic1} alt="pic1" className="f1" />
                <img src={pic2} alt="pic2" className="f2" />
                <img src={pic3} alt="pic3" className="f3" />
                <img src={pic4} alt="pic4" className="f4" />
                <img src={pic5} alt="pic5" className="f5" />
                <img src={pic6} alt="pic6" className="f6" />
                <img src={pic7} alt="pic7" className="f7" />
                <img src={pic8} alt="pic8" className="f8" />
            </div>
        </div>
    )
}

export default Home;