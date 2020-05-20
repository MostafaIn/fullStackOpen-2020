import React,{useState, useEffect} from 'react'

import axios from 'axios'
import CountriesList from './components/CountriesList'
import Find from './components/Find'

const App = () => {
    const [countries, setCountries] = useState([])
    const [countryName, setCountryName] = useState('')

    useEffect(() => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => setCountries(response.data))
    }, [])

    const handleChange = e =>{
        setCountryName(e.target.value)
    }

    const searchedList = countries.filter( country => country.name.toLowerCase().includes(countryName));
    // console.log(countries)
    return (
        <div>
            <Find countryName={countryName} handleChange={handleChange} />
            <CountriesList countryName={countryName} countries={searchedList ? searchedList : countries} />
        </div>
    )
}

export default App
