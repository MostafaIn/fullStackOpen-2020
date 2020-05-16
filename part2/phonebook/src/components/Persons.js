import React from 'react'

const Persons = ({searchedPersons}) => {
    return (
        <table>
        <tbody>
          {searchedPersons.map( (person,index) => <tr  key={index}>
              <td>{person.name}</td>
              <td>{person.number}</td>
          </tr>)}
        </tbody>
      </table>
    )
}

export default Persons
