import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export const IconRound = ({children}) => {
    return (
        <div className='icon-round'>
            <FontAwesomeIcon icon={children}/>
        </div>
    );
};

