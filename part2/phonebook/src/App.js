import React, { useState, useEffect } from 'react'

import personsServices from './services/persons';

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setsearchName ] = useState('')

  useEffect(() => {
    personsServices.getAll()
    .then( response => setPersons(response))
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
        if(checkName){
          if(window.confirm(`${newName} is already added to phonebook,replace the old number with a new one?`)){
            checkName.number = newNumber 
            personsServices.update(checkName.id, checkName)
          }
        }else{
          personsServices.create(newPerson)
        } 
        
        setNewName('')
        setNewNumber('')    
  };

  const handleDelete = (name, id) =>{
    if (!window.confirm(`Delete ${name} ?`)) {
      return;
    }
    personsServices.deletePerson(id)
  }

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
      <Persons 
        searchedPersons={searchedPersons} 
        handleDelete={handleDelete}
      />
      {(searchedPersons.length < 1) ? <h4>not matched</h4> : null}
    </div>
  )
}

export default App