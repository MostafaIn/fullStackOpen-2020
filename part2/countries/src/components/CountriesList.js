import React from 'react'
import CountryInfo from './CountryInfo'

const CountriesList = ({countries, countryName}) => {
    // console.log(countries.length)
    if(countryName && countries.length > 10){
        return <p>Too many matches, specify another filter</p>
    }else if(countries.length === 1){
        return <CountryInfo countryInfo={countries} />
    }else{
        return (
            <div>
                {countries.map( (country, index) => <div key={index}>
                <p>{country.name}</p>
                
                </div>)}
            </div>
        )
    }
}

export default CountriesList
