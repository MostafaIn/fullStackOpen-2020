import React from 'react'
// import personsServices from '../services/persons';



const Persons = ({searchedPersons, handleDelete}) => {

    // const handleDelete = (name, id) =>{
    //   if (!window.confirm(`Delete ${name} ?`)) {
    //     return;
    //   }
    //   personsServices.deletePerson(id)
    // }

    return (
        <table>
        <tbody>
          {searchedPersons.map( (person,index) => <tr  key={index}>
              <td>{person.name}</td>
              <td>{person.number}</td>
              <td><button onClick={() => handleDelete(person.name, person.id)}>delete</button></td>
          </tr>)}
        </tbody>
      </table>
    )
}

export default Persons
