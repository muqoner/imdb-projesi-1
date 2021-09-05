import React from 'react'

 const Alert = (props) => {
     const {msg,type} = props.alert
    return (
        <div className="container">
            <div className={`alert alert-${type}`}>
                {msg}
            </div>
        </div>
    )
}

export default Alert