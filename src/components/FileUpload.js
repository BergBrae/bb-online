// src/components/FileUpload.js
import React, { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button, ProgressBar } from 'react-bootstrap';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log('File available at', downloadURL);
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
      {progress > 0 && <ProgressBar now={progress} label={`${Math.round(progress)}%`} />}
      {url && <div>File URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>}
    </div>
  );
};

export default FileUpload;
