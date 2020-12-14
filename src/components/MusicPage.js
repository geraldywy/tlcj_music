import NavBar from "./NavBar"
import MediaQuery from "react-responsive"

import video1 from "../videos/video1.mp4"

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
    const clipList = [firstVideo]

    return (
        <div className="musicPage">
            <MediaQuery minDeviceWidth={769}><NavBar mobile={false} /></MediaQuery>
            <MediaQuery maxDeviceWidth={768}><NavBar mobile={true} /></MediaQuery>
            <div className="musicPageContent">
                {clipList.map((clip, i) =>
                    clip.video ?
                    <div key={i} style={{color: "white"}}>
                        <section style={{width: "50%", marginTop: "15%"}}>
                           <video style={{height: "200px"}} src={clip.source} controls></video> 
                        </section>
                        <section style={{width: "50%"}}>
                            <p >
                                {clip.title}
                                {clip.date}
                            </p>
                        </section>
                       
                    </div>
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