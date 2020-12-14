import React from "react";

const VideoContainer = ({ clip }) => {

    return (
        <div className="videoContainer">
            <div className="center">
                <video src={clip.source} controls></video> 
                <div className="btnText">
                <span className="videoText" id="videoTitle">{clip.title}</span> 
                <span className="videoText">{clip.date}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoContainer;