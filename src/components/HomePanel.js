import React from "react";
import {
    Link
} from "react-router-dom";

const HomePanel = (props) => {
    return (
        <div className="homePanel">
            <div className={props.mobile ? "homeNavMobile" : "homeNav"}>
                <Link to="/music" >
                    <span className="panelItem" id="musicLink">Music</span>
                </Link>
                <Link to="/blog">
                    <span className="panelItem" id="blogLink">Blog</span>
                </Link>
                <Link to="/about">
                    <span className="panelItem" id="aboutLink">About</span>
                </Link>
                <Link to="socials">
                    <span className="panelItem" id="socialsLink">Socials</span>
                </Link>
            </div>
            
            <div className="introText" style={{fontSize: props.mobile ? "10pt": "12pt", lineHeight: props.mobile ? "1.3": "1.6"}}>
                <p>
                    <h3>Prob insert some updates here</h3>
                    Ut esse eu reprehenderit sunt amet Lorem enim do exercitation dolor dolore cupidatat. Tempor nulla ex fugiat duis
                </p>
            </div>
        </div>
        
    )
}

export default HomePanel;