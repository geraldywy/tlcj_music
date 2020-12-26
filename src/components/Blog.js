import React from "react"
import MediaQuery from "react-responsive"
import NavBar from "./NavBar"
import Footer from "./Footer"

// nid to use inline style to access process env variable
const bgCSS = {
    background: `url(${process.env.REACT_APP_SERVER_URL}/static/images/pic4.jpg) no-repeat center center fixed`,
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

const Blog = (props) => {
    
    return (
        <div className = "appearSlow">
            <div style={bgCSS}>
                <MediaQuery minDeviceWidth={769}>
                    <NavBar mobile={false} />
                    
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                    <NavBar mobile={true} />
                </MediaQuery>
                <h1 style={{marginTop: "40vh", paddingBottom: "40vh", textAlign: "center", color: "lightGreen"}}>Work in progress :()</h1>
                <Footer />
            </div>
        </div>
    )
}

export default Blog