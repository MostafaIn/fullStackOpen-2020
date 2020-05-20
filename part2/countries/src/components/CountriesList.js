import React,{useState} from 'react'
import CountryInfo from './CountryInfo'

const CountriesList = ({countries, countryName}) => {
    const [country, setCountry] = useState(null)

    if(country){
         return <CountryInfo countryInfo={[country]} />
    }     

    if(countryName && countries.length > 10){
        return <p>Too many matches, specify another filter</p>
    }else if(countries.length === 1){
        return <CountryInfo countryInfo={countries} />
    }else{
        return (
            <div>
                {countries.map( (country, index) => <div key={index}>
                <p>{country.name} <button onClick={() => setCountry(country)}>show</button></p> 
                </div>)}
            </div>
        )
    }
}

export default CountriesList
