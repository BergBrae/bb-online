// src/components/VideoCarousel.js
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";

const VideoCarousel = ({ folder }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const storageRef = ref(storage, folder);
            const fileList = await listAll(storageRef);
            const urls = await Promise.all(fileList.items.map(item => getDownloadURL(item)));
            setVideos(urls);
        };

        fetchVideos();
    }, [folder]);

    return (
        <Carousel>
            {videos.map((url, index) => (
                <Carousel.Item key={index}>
                    <video className="d-block w-100" controls>
                        <source src={url} type="video/mp4" />
                    </video>
                    <Carousel.Caption>
                        <h3>Video {index + 1}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default VideoCarousel;
