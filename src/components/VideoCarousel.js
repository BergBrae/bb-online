import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";

const VideoCarousel = ({ folder }) => {
    const [videos, setVideos] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
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
        if (!isPlaying) {
            setActiveIndex(selectedIndex);
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
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
            style={{ width: '80%', height: 'auto', margin: 'auto' }}
            className="video-carousel"
        >
            {videos.map((url, index) => (
                <Carousel.Item key={index}>
                    <video
                        className="d-block w-100"
                        onPlay={handlePlay}
                        onPause={handlePause}
                        controls
                        preload="auto"
                        style={{ maxHeight: '500px' }}
                    >
                        <source src={url} type="video/mp4" />
                    </video>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default VideoCarousel;
