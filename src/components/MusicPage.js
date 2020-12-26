import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import MediaQuery from "react-responsive"

import video1 from "../videos/video1.mp4"
import VideoContainer from "./VideoContainer"

import "../fonts.css";
import Footer from "./Footer"

// nid to use inline style to access process env variable
const bgCSS = {
    background: `url(${process.env.REACT_APP_SERVER_URL}/static/images/pic2.jpg) no-repeat center center fixed`,
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

const MusicPage = () => {

    // pull list of videos/sound clips from backend
    // display video/sound clips with description
    // format of clips:
    /*
     clip: {
        id: "" <source video id to look use>
        type: "" <source its from, eg: youtube>
     }

     example:
     const firstVideo = {
        id: "tEA2prf_x48",
        type: "youtube",
    }

    */

    const [pinnedList, setPinnedList] = useState([])
    const [originalList, setOriginalList] = useState([])
    const [coverList, setCoverList] = useState([])

    var tempList = []
    useEffect(() => { // populate states from api
        fetch(`${process.env.REACT_APP_SERVER_URL}/v1/api/music`)
        .then((response) => response.json())
        .then((data) => {
            data.pinned.map(pin => {
                const id = pin[1].split("?v=")[1]
                const type = pin[4]
                tempList = tempList.concat({ id, type })
            })
            setPinnedList(tempList)
            tempList = []
            data.originals.map(org => {
                tempList = tempList.concat({ title: org[0], link: org[1] })
            })
            setOriginalList(tempList)
            tempList = []
            data.covers.map(cover => {
                tempList = tempList.concat({ title: cover[0], link: cover[1] })
            })
            setCoverList(tempList)
        });
    }, [])

    return (
        <div className="appearSlow">
            <div style={bgCSS}>
                <MediaQuery minDeviceWidth={769}>
                    <NavBar mobile={false} />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                    <NavBar mobile={true} />
                </MediaQuery>
                
                <div className="musicPageContent">
                    <h1 className="reelTitle">Pinned</h1>
                    <VideoContainer clips={pinnedList} />

                    <div className="colContainer">
                        <h3 className="colTitle">Originals</h3>
                        <ul className="songTitle">
                            {originalList.map((org, i) => 
                                <li className="indivTitle" key={i}>
                                    <a href={org.link} target="_blank" rel="noopener noreferrer">
                                        {org.title}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="colContainer">
                        <h3 className="colTitle">Covers</h3>
                        <ul className="songTitle">
                            {coverList.map((cover, i) => 
                                <li className="indivTitle" key={i}>
                                    <a href={cover.link} target="_blank" rel="noopener noreferrer">
                                        {cover.title}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MusicPage;