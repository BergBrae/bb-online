// src/components/DisplayFiles.js
import React, { useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Masonry from 'react-masonry-css';
import { Container } from 'react-bootstrap';

const DisplayFiles = ({ folder }) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const storageRef = ref(storage, folder);
            const fileList = await listAll(storageRef);
            const urls = await Promise.all(fileList.items.map(item => getDownloadURL(item)));
            setFiles(urls);
        };

        fetchFiles();
    }, [folder]);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {files.map((url, index) => (
                    <div key={index} style={{ marginBottom: '3px' }}>
                        {url.match(/\.(jpeg|jpg|gif|png)/) ? (
                            <img src={url} alt={`file-${index}`} style={{ width: '100%', display: 'block' }} />
                        ) : (
                            <video width="100%" controls>
                                <source src={url} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </Masonry>
        </Container>
    );
};

export default DisplayFiles;
