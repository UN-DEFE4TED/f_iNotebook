import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div class={`alert alert-${props.type}`} role="alert">
                {props.message}
            </div>
        </div>
    )
}

export default Alert
