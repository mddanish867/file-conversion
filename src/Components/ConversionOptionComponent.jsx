import React from 'react'

const ConversionOptionComponent = ({onChange}) => {
    const handleConversionChange = (event)=>{
        const conversionType = event.target.value;
        onChange(conversionType);
    }
  return (
    <>
     <div>
        <label>
            Select Conversion Type:
            <select onChange={handleConversionChange}>
<option value="wordToPdf">Word to PDF</option>
<option value="pdefToword">PDF to Word</option>
            </select>
        </label>
        </div> 
    </>
  )
}

export default ConversionOptionComponent
