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
    const [isImage, setIsImage] = useState(true);

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
        setIsImage(file.match(/\.(jpeg|jpg|gif|png)/) ? true : false);
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
                    <div className='image'  key={index} style={{ margin: '10px' }} onClick={() => handleShow(url)}>
                        {url.match(/\.(jpeg|jpg|gif|png)/) ? (
                            <img className='round'  src={url} alt={`file-${index}`} style={{ width: '100%', display: 'block' }} />
                        ) : (
                            <video className='round' width="100%" loop autoPlay muted>
                                <source src={url} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </Masonry>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Body style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: isImage ? 'auto' : '100%', height: 'auto', maxHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {selectedFile && isImage ? (
                            <img src={selectedFile} alt="Selected file" style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
                        ) : (
                            <video style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} controls>
                                <source src={selectedFile} type="video/mp4" />
                            </video>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default DisplayFiles;
