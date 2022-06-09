import { faTriangleCircleSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Alert = ({type,message}) => {
    return (
        <div className='alert'>
            <FontAwesomeIcon icon={faTriangleExclamation} /> {message}
        </div>
    );
};

export default Alert;