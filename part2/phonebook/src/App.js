import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setsearchName ] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then( response => setPersons(response.data))
  }, [])

  const handleChange = (e) =>{
    const {name, value} = e.target;
    switch (name) {
      case 'newName':
          setNewName(value)
        break;
      case 'newNumber':
          setNewNumber(value)
        break;
      case 'searchName':
          setsearchName(value)
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) =>{
        event.preventDefault();
        const newPerson = { name: newName, number: newNumber}
        if(!newName || newName === ''){
            return alert('Enter your name')
          } 
        const checkName = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
        
        (checkName) ? alert(`${newName} is already added to phonebook`) : setPersons([...persons, newPerson]);  
        setNewName('')
        setNewNumber('')
  };

  const searchedPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));
  
  console.log(searchedPersons)
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter 
          searchName={searchName} 
          handleChange={handleChange} 
        />
      <h2>add a new</h2>
        <PersonForm 
          handleSubmit={handleSubmit} 
          newName={newName}
          newNumber={newNumber} 
          handleChange={handleChange}
        />
      <h2>Numbers</h2>
      <Persons searchedPersons={searchedPersons} />
      {(searchedPersons.length < 1) ? <h4>not matched</h4> : null}
    </div>
  )
}

export default App