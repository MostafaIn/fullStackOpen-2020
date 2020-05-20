import React from 'react'

const CountryInfo = ({countryInfo}) => {
    console.log(countryInfo)
    return (
        <div>
            {countryInfo.map( (country, index) => <div key={index}>
                    <h3>{country.name}</h3>
                    <h5>capital: { country.capital}</h5>
                    <h5>population: { country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " , ")}</h5>
                    <h4>Languages</h4>
                    {(country.languages).map((lang,index) => <ul key={index}><li>{lang.name}</li></ul>)}
                    <img src={country.flag} alt={country.name} width= '160' height='120' />
                </div>
            )}
        </div>
    )
}

export default CountryInfo
