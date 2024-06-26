// src/components/DisplayFiles.js
import React, { useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Container, Row, Col, Image } from 'react-bootstrap';

const DisplayFiles = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const storageRef = ref(storage, 'files/');
            const fileList = await listAll(storageRef);
            const urls = await Promise.all(fileList.items.map(item => getDownloadURL(item)));
            setFiles(urls);
        };

        fetchFiles();
    }, []);

    return (
        <Container>
            <Row>
                {files.map((url, index) => (
                    <Col key={index} md={4}>
                        {url.match(/\.(jpeg|jpg|gif|png)$/) ? (
                            <Image src={url} fluid />
                        ) : (
                            <video width="320" height="240" controls>
                                <source src={url} type="video/mp4" />
                            </video>
                        )}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DisplayFiles;
