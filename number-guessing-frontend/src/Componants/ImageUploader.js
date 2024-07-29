// ImageUploader.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className='image-drop-div'>
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image of a number, or click to select files</p>
    </div>
  );
};


export default ImageUploader;
