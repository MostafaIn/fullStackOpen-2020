import React from 'react'


const Notifcation = ({message}) => {
    console.log(message)
    const {msg, err} = message
    if (!msg) {
        return null
      }
    
      return (
        <div className={ err ? "notification error" : "notification"}>
          {msg}
        </div>
      )
}

export default Notifcation
