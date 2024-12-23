import React, { useState } from 'react';

const VideoBackground = () => {
    const videoSources = [
        "../img/video-bground-2.mp4",
        "../img/video-bground-3.mp4"
    ];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    };

    const currentSource = videoSources[currentVideoIndex];

    return (
        <video
            key={currentSource}
            autoPlay
            loop={false}
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
            }}
        >
            <source src={currentSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoBackground;
