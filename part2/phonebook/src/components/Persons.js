import React from 'react'



const Persons = ({searchedPersons, handleDelete}) => {
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
