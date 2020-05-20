import React from 'react'

const Find = ({countryName, handleChange}) => {
    // console.log(countryName)
    return (
        <div>
           Find countries <input value={countryName} onChange={handleChange} /> 
        </div>
    )
}

export default Find
