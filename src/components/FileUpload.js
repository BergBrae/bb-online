// src/components/FileUpload.js
import React, { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button, ProgressBar, Alert } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';

const FileUpload = ({ folder, placeholder }) => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setFiles(selectedFiles);
      setSuccess(false);
      setError('');
      setProgress({});
      selectedFiles.forEach(file => handleUpload(file));
    }
  };

  const handleUpload = (file) => {
    if (file) {
      const storageRef = ref(storage, `${folder}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(prevProgress => ({ ...prevProgress, [file.name]: prog }));
        },
        (error) => {
          console.error("Error uploading file:", error);
          setError('Error uploading file');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setSuccess(true);
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" id="file-upload" onChange={handleFileChange} style={{ display: 'none' }} multiple />
      <Button 
        className="floating-button" 
        onClick={() => document.getElementById('file-upload').click()}
      >
        <FaUpload /> Upload your {placeholder} to share with Brenda
      </Button>
      {Object.keys(progress).length > 0 && (
        Object.keys(progress).map((fileName) => (
          <ProgressBar 
            key={fileName} 
            now={progress[fileName]} 
            label={`${fileName}: ${Math.round(progress[fileName])}%`} 
            style={{ marginTop: '10px' }} 
          />
        ))
      )}
      {success && (
        <Alert 
          variant="success" 
          style={{ 
            marginTop: '10px', 
            position: 'fixed', 
            top: '20px', 
            right: '20px', 
            zIndex: 1000 
          }}
        >
          Files uploaded successfully!
        </Alert>
      )}
      {error && (
        <Alert 
          variant="danger" 
          style={{ 
            marginTop: '10px', 
            position: 'fixed', 
            top: '20px', 
            right: '20px', 
            zIndex: 1000 
          }}
        >
          {error}
        </Alert>
      )}
    </div>
  );
};

export default FileUpload;
