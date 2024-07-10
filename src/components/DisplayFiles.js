import React, { useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Masonry from 'react-masonry-css';
import { Container, Modal } from 'react-bootstrap';
import '../App.css';  // Ensure this imports the CSS styles

const DisplayFiles = ({ folder }) => {
    const [files, setFiles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const fetchFiles = async () => {
            const storageRef = ref(storage, folder);
            const fileList = await listAll(storageRef);
            const urls = await Promise.all(fileList.items.map(item => getDownloadURL(item)));
            setFiles(urls);
        };

        fetchFiles();
    }, [folder]);

    const handleShow = (file) => {
        setSelectedFile(file);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedFile(null);
    };

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
    };

    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {files.map((url, index) => (
                    <div key={index} style={{ margin: '10px' }} onClick={() => handleShow(url)}>
                        {url.match(/\.(jpeg|jpg|gif|png)/) ? (
                            <img src={url} alt={`file-${index}`} style={{ width: '100%', display: 'block' }} />
                        ) : (
                            <video width="100%" loop autoPlay muted>
                                <source src={url} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </Masonry>

            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Body>
                    {selectedFile && selectedFile.match(/\.(jpeg|jpg|gif|png)/) ? (
                        <img src={selectedFile} alt="Selected file" style={{ width: '100%' }} />
                    ) : (
                        <video width="100%" controls>
                            <source src={selectedFile} type="video/mp4" />
                        </video>
                    )}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default DisplayFiles;
