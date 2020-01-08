import React from 'react';

const ErrorMessage = props => {
    return <p id={props.id} className="error-alert hidden">{props.ErrorMessage}</p>

}


export default ErrorMessage