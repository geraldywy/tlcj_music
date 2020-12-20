import React from "react"
import MediaQuery from "react-responsive"
import NavBar from "./NavBar"
import SocialMediaPanel from "./SocialMediaPanel"
import { faFacebookF, faTwitter, faSoundcloud, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Footer from "./Footer"

// nid to use inline style to access process env variable
const bgCSS = {
    background: `url(${process.env.REACT_APP_SERVER_URL}/static/images/pic8.jpg) no-repeat center center fixed`,
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    minWidth: "100%",
    minHeight: "100%",
    top: "0",
    left: "0",
    objectFit: "cover",
    position: "absolute"
}

const socials = [
    [
        "https://www.instagram.com/asdadlkfdkamd/",
        faInstagram,
        "INSTAGRAM"
    ],
    [
        "https://www.youtube.com/channel/UCIjYyZxkFucP_W-tmXg_9Ow",
        faYoutube,
        "YOUTUBE"
    ],
    [
        "https://www.facebook.com/leehsienloong/",
        faFacebookF,
        "FACEBOOK"
    ],
    [
        "https://soundcloud.com/user950167941",
        faSoundcloud,
        "SOUNDCLOUD"
    ],
    [
        "https://twitter.com/trainwreckstv",
        faTwitter,
        "TWITTER"
    ]
]

const Socials = (props) => {
    
    return (
        <div style={bgCSS}>
            <MediaQuery minDeviceWidth={769}>
                <NavBar mobile={false} />
                <div className="socialPanels">
                    {socials.map(social => 
                        <SocialMediaPanel mobile={false} link={social[0]} logo={social[1]} text={ social[2] } />
                    )}
                </div>
                
            </MediaQuery>
            <MediaQuery maxDeviceWidth={768}>
                <NavBar mobile={true} />
                <div className="mobileSocialPanels">
                    {socials.map(social => 
                        <SocialMediaPanel mobile={true} link={social[0]} logo={social[1]} text={ social[2] } />
                    )}
                </div>
                
            </MediaQuery>
            
            <Footer />
        </div>
    )
}

export default Socials