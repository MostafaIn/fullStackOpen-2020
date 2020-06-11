import React, { useState, useEffect } from 'react'

import personsServices from './services/persons';

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notifcation'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setsearchName ] = useState('')
  const [message, setMessage] = useState({msg: null, err: false})

  useEffect(() => {
    personsServices.getAll()
    .then( response => setPersons(response))
    .catch(err =>{
      setMessage({msg:`Data is not loaded from server!`, err: true})
      setTimeout(() => setMessage({msg: null, err: false}),5000)
    })
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
            personsServices.update(checkName.id, checkName).then((res) =>{
              setMessage({msg:`updated ${res.name} !`, err: false})
              setTimeout(() => setMessage({msg: null, err: false}),5000)
            }).catch( err =>{
              setMessage({msg: Object.values(err.response.data), err: true})
              setTimeout(() => setMessage({msg: null, err: false}),5000)
            })
          }
        }else{
          personsServices.create(newPerson)
          .then((res) =>{
            setMessage({msg:`Added ${res.name} !`, err: false})
            setTimeout(() => setMessage({msg: null, err: false}),5000)
          })
          .catch( error =>{
            setMessage({msg:Object.values(error.response.data), err: true})
            setTimeout(() => setMessage({msg: null, err: false}),5000)
          })
        } 
        
        setNewName('')
        setNewNumber('')    
  };

  const handleDelete = (name, id) =>{
    if (!window.confirm(`Delete ${name} ?`)) {
      return;
    }
    personsServices.deletePerson(id).then(() =>{
      setMessage({msg:`${name} deleted!`, err: false})
      setTimeout(() => setMessage({msg: null, err: false}),5000)
    })
  }

  const searchedPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));
  
  console.log(searchedPersons)
  return (
    <div>
      <h2>Phonebook</h2>
        <Notification
          message={message}
        />
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