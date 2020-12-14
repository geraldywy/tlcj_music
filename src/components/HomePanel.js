import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const HomePanel = (props) => {
    return (
        <div className="homePanel">
            <div className={props.mobile ? "homeNavMobile" : "homeNav"}>
                <Link to="/music" style={{textDecoration: "none", color: "white"}}><span className="panelItem" id="musicLink">Music</span></Link>
                <span className="panelItem" id="blogLink">Blog</span>
                <span className="panelItem" id="aboutLink">About</span>
                <span className="panelItem" id="socialsLink">Socials</span>
            </div>
            
            <div className="introText" style={{fontSize: props.mobile ? "10pt": "12pt", lineHeight: props.mobile ? "1.3": "1.6"}}>
                <p>
                    Ut esse eu reprehenderit sunt amet Lorem enim do exercitation dolor dolore cupidatat. Tempor nulla ex fugiat duis anim. Qui adipisicing nisi veniam eu excepteur dolor ad duis anim Lorem commodo laboris. Nostrud mollit cillum velit cillum. Nulla aliqua ad amet elit esse cupidatat est enim ullamco commodo officia labore. In aute fugiat enim tempor do et.

                    Amet mollit duis minim dolor sunt nisi magna nulla dolore officia enim esse labore officia. Minim exercitation amet culpa deserunt proident sit laborum. Tempor ad elit minim tempor.

                    Laboris ex sint ullamco magna commodo Lorem. Esse do est cupidatat labore veniam duis ex nisi minim aute commodo. Labore est duis aliqua sunt reprehenderit tempor duis enim dolore enim occaecat ullamco. Anim occaecat officia qui esse nulla id et. Est ea cillum reprehenderit quis tempor labore non. Ea incididunt fugiat deserunt pariatur duis et in nisi irure duis Lorem do veniam exercitation. Nulla exercitation amet nulla cillum ex sunt occaecat id nisi ipsum amet aliquip.
                </p>
            </div>
        </div>
        
    )
}

export default HomePanel;