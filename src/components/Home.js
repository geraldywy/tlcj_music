import React from "react"
import MediaQuery from "react-responsive"
import HomePanel from "./HomePanel"
import Footer from "./Footer"

const Home = () => {
    console.log(process.env)
    const SERVER_URL = process.env.REACT_APP_SERVER_URL
    const sigLogo = SERVER_URL + "/static/images/sig-logo.jpg"

    return (
        <div className="appear" >
            <img id="brand" src={sigLogo} alt="signatureLogo" />
            <MediaQuery minDeviceWidth={541}><HomePanel mobile={false} /></MediaQuery>
            <MediaQuery maxDeviceWidth={540}><HomePanel mobile={true} /></MediaQuery>

            <Footer fixed={true} />

            <div className="fadingBackgrounds">
                {[1,2,3,4,5,6,7,8].map((i) => 
                    <div>
                        <img src={`${SERVER_URL}/static/images/pic${i}.jpg`} alt={`pic${i}`} className={`f${i}`} />
                    </div>
                    )}
            </div>

            
        </div>
    )
}

export default Home;