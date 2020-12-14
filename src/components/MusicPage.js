import NavBar from "./NavBar"
import MediaQuery from "react-responsive"

import video1 from "../videos/video1.mp4"
import VideoContainer from "./VideoContainer"

import Headroom from "react-headroom"

const MusicPage = () => {

    // pull list of videos/sound clips from backend
    // display video/sound clips with description
    // format of clips:
    /*
     clip: {
        source: <binary data>,
        video: true/false,
        title: "Piano clip",
        date: "12/2020"
     }
    */
   const firstVideo = {
       source: video1,
       video: true,
       title: "piano clip~",
       date: "12/2020"
   }
   const secondVideo = {
    source: video1,
    video: true,
    title: "piano clip 2~",
    date: "12/2020"
}
    const clipList = [firstVideo, secondVideo]

    return (
        <div className="musicPage">
            <MediaQuery minDeviceWidth={769}><NavBar mobile={false} /></MediaQuery>
            <MediaQuery maxDeviceWidth={768}><NavBar mobile={true} /></MediaQuery>
            
            <div className="musicPageContent">
                {clipList.map((clip, i) =>
                    clip.video ?
                    <VideoContainer clip={clip} />
                    :
                    <div key={i}>
                        <audio>
                            <source src={clip.source} type="audio/mpeg"></source>
                        </audio>
                    </div>
                )}
                
            </div>
        </div>

        
    )
}

export default MusicPage;