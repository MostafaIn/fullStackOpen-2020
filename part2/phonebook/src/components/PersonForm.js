import React from 'react'

const PersonForm = ({handleSubmit, handleChange, newName, newNumber}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} name="newName" onChange={handleChange} />
            </div>
            <div>
                number: <input value={newNumber} name="newNumber" onChange={handleChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
