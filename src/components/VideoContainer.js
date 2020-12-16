import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from "react-player"

const ClipSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" url={url} playing={isSelected} controls={true} />
);

const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

const customRenderThumb = (children) =>
    children.map((item) => {
        const videoId = getVideoId(item.props.url);
        return <img src={getVideoThumb(videoId)} />;
    });

const VideoContainer = ({ clips }) => {

    return (
        <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
            {clips.map((clip, i) => 
                <ClipSlide key={`${clip.type}-${i}`} url={`https://www.youtube.com/embed/${clip.id}`} />
            )}
            
        </Carousel>
        
    )
}

export default VideoContainer;