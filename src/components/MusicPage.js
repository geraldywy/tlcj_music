import NavBar from "./NavBar"
import MediaQuery from "react-responsive"

import video1 from "../videos/video1.mp4"
import VideoContainer from "./VideoContainer"

import "../fonts.css";

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
    
    const fourthVideo = {
        id: "hj3h4Hdj2U8",
        type: "youtube"
    }

    // max 3 pinned videos
    const clipList = [firstVideo, thirdVideo, fourthVideo]

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

                <div className="colContainer">
                    <h3 className="colTitle">Originals</h3>
                    <ul className="songTitle">
                        {[1, 2, 3, 4, 5, 6, 7].map(i => 
                            <li className="indivTitle" key={i}>
                                <a href="https://www.youtube.com/watch?v=hj3h4Hdj2U8" target="_blank" rel="noopener noreferrer">
                                    Worth It - Kodaline (Acoustic Cover)
                                </a>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="colContainer">
                    <h3 className="colTitle">Covers</h3>
                    <ul className="songTitle">
                        {[1, 2, 3, 4, 5, 6, 7].map(i => 
                            <li className="indivTitle" key={i}>
                                <a href="https://www.youtube.com/watch?v=hj3h4Hdj2U8" target="_blank" rel="noopener noreferrer">
                                    Worth It - Kodaline (Acoustic Cover)
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            
            
        </div>

        
    )
}

export default MusicPage;