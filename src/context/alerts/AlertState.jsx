import React, { useState } from 'react'
import AlertContext from './AlertContext'

const AlertState = (props) => {
    const [alert, setalert] = useState(null);
    const showAlert = (message, type)=>{
      setalert({message, type});
      setTimeout(() => {
        setalert(null)
      }, 2000);
    };
    return (
        <div>
            <AlertContext.Provider value={{alert, showAlert}}>
                {props.children}
            </AlertContext.Provider>
        </div>
    )
}

export default AlertState
