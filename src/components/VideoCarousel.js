import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FaPlayCircle } from 'react-icons/fa';

const VideoCarousel = ({ folder }) => {
    const [videos, setVideos] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingIndex, setPlayingIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            const storageRef = ref(storage, folder);
            const fileList = await listAll(storageRef);
            const urls = await Promise.all(fileList.items.map(item => getDownloadURL(item)));
            setVideos(urls);
            setIsLoading(false);
        };

        fetchVideos();
    }, [folder]);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
        const video = document.getElementById(`video-${playingIndex}`);
        if (video) {
            video.pause();
        }
        setPlayingIndex(null);
    };

    const togglePlayPause = (e, index) => {
        e.stopPropagation();
        const video = document.getElementById(`video-${index}`);
        if (video.paused) {
            video.play();
            setPlayingIndex(index);
        } else {
            video.pause();
            setPlayingIndex(null);
        }
    };

    const handleVideoEnded = () => {
        setPlayingIndex(null);
    };

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={null}
            style={{ width: '80%', height: 'auto', margin: 'auto' }}
            className="video-carousel"
        >
            {videos.map((url, index) => (
                <Carousel.Item key={index} style={{ position: 'relative', height: '500px' }}>
                    <video
                        id={`video-${index}`}
                        className="d-block w-100"
                        preload="auto"
                        onEnded={handleVideoEnded}
                        style={{ maxHeight: '500px', width: '100%' }}
                    >
                        <source src={url} type="video/mp4" />
                    </video>
                    {playingIndex !== index && (
                        <div
                            className="play-pause-overlay"
                            onClick={(e) => togglePlayPause(e, index)}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '3rem',
                                cursor: 'pointer',
                                pointerEvents: 'auto',
                            }}
                        >
                            <FaPlayCircle />
                        </div>
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default VideoCarousel;
