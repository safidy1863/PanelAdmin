import React from 'react';
import Header from '../../atoms/Header';
import Navigation from '../../atoms/Navigation';

const Clients = () => {
    return (
        <div className='page'>
            <Navigation/>
            <div className='right-page'>
                <Header/>
                Clients
            </div>
        </div>
    );
};

export default Clients;