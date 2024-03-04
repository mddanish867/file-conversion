import React from 'react'

const FileInputComponents = ({onChange}) => {
    const handleFileChange = (event) =>{
        const file = event.target.files[0];
        onChange(file);
    };
  return (
    <>
      <div>
        <input type='file' onChange={handleFileChange}/>
      </div>
    </>
  )
}

export default FileInputComponents
