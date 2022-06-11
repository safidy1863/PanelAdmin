import React from 'react';
import Header from '../../atoms/Header';
import Navigation from '../../atoms/Navigation';
import ContentClient from './ContentClient';

const Clients = () => {
    return (
        <div className='page'>
            <Navigation/>
            <div className='right-page'>
                <Header title="Clients"/>
                <div className='client-content'>
                    <ContentClient/>
                </div>
            </div>
        </div>
    );
};

export default Clients;