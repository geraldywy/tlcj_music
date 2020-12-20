import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/fontawesome-free-solid"

const Footer = ({ fixed }) => {

    return (
        <div id= {fixed ? "footerFixed": "footer"}>
            Made with <FontAwesomeIcon icon={faHeart} style={{color: "red"}} /> by <a target="_blank" rel="noopener noreferrer" href="https://tabbycat01.github.io/">Gerald</a>
        </div>
    )
}

export default Footer