// src/components/FileUpload.js
import React, { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button, ProgressBar, Alert } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';

const FileUpload = ({ folder, placeholder }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setSuccess(false);
      setError('');
      setProgress(0);
      handleUpload(selectedFile);
    }
  };

  const handleUpload = (file) => {
    if (file) {
      const storageRef = ref(storage, `${folder}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
          setError('Error uploading file');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            setSuccess(true);
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" id="file-upload" onChange={handleFileChange} style={{ display: 'none' }} />
      <Button 
        className="floating-button" 
        onClick={() => document.getElementById('file-upload').click()}
      >
        <FaUpload /> Upload your {placeholder} to share with Brenda
      </Button>
      {progress > 0 && progress < 100 && (
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} style={{ marginTop: '10px' }} />
      )}
      {success && (
        <Alert variant="success" style={{ marginTop: '10px' }}>
          File uploaded successfully! <a href={url} target="_blank" rel="noopener noreferrer">View file</a>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" style={{ marginTop: '10px' }}>
          {error}
        </Alert>
      )}
    </div>
  );
};

export default FileUpload;
