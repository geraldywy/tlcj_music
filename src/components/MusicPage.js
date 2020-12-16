import NavBar from "./NavBar"
import MediaQuery from "react-responsive"

import video1 from "../videos/video1.mp4"
import VideoContainer from "./VideoContainer"

import "../fonts.css"

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
   const firstVideo = {
        id: "tEA2prf_x48",
        type: "youtube",
    }

   const secondVideo = {
        id: "ewBulJdtGlM",
        type: "youtube"
    }

    const thirdVideo = {
        id: "2QKARCPO3sA",
        type: "youtube"
    }

    const clipList = [firstVideo, secondVideo, thirdVideo]

    return (
        <div className="musicPage">
            <MediaQuery minDeviceWidth={769}>
                <NavBar mobile={false} />
            </MediaQuery>
            <MediaQuery maxDeviceWidth={768}>
                <NavBar mobile={true} />
            </MediaQuery>

            
            <div className="musicPageContent">
                <h1 className="reelTitle">Pinned</h1>
                <VideoContainer clips={clipList} />
            </div>

            
        </div>

        
    )
}

export default MusicPage;