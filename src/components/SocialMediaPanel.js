import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialMediaPanel = ({ mobile, link, logo, text }) => {
    return (
        <div className={mobile ? "mobileSocialPanel": "socialPanel"}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={logo} style={{fontSize: "24pt"}} />
                <span className="socialsText">{text}</span>
            </a>
            
        </div>
        
        
    )
}

export default SocialMediaPanel