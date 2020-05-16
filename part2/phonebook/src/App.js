import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setsearchName ] = useState('')

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
      <div>
        filter shown with: <input value={searchName} onChange={(e) => setsearchName(e.target.value)} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
        number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {searchedPersons.map( (person,index) => <tr  key={index}>
              <td>{person.name}</td>
              <td>{person.number}</td>
          </tr>)}
        </tbody>
      </table>
      {(searchedPersons.length < 1) ? <h4>not matched</h4> : null}
    </div>
  )
}

export default App