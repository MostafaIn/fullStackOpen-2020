import React from 'react'


const Notifcation = ({message}) => {
    console.log(message)
    if (!message) {
        return null
      }
    
      return (
        <div className="notification">
          {message}
        </div>
      )
}

export default Notifcation
