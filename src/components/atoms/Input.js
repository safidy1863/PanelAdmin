import React from 'react';

export const InputRound = ({id,placeholder,children}) => {
    return (
        <div className='input-round'>
            <label htmlFor={id}>{children}</label>
            <input id={id} placeholder={placeholder} />
        </div>
    );
};
