import React from 'react'

const ConvertedFileComponent = ({fileUrl}) => {
  return (
    <>
     <div>
        <h2>Converted File:</h2>
        <a href={fileUrl} download>Download Converted File</a>
        </div> 
    </>
  )
}

export default ConvertedFileComponent
