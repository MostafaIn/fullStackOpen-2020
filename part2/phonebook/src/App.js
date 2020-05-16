import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) =>{
      setNewName(event.target.value)
  };

  const handleSubmit = (event) =>{
        event.preventDefault();
        const newPerson = { name: newName}
        if(!newName || newName === ''){
            return alert('Enter your name')
          } 
        const checkName = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
        
        (checkName) ? alert(`${newName} is already added to phonebook`) : setPersons([...persons, newPerson]);  
        setNewName('')
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map( (person,index) => <p key={index}>{person.name}</p>)}
    </div>
  )
}

export default App