import React from 'react';
import Header from '../../atoms/Header';
import Navigation from '../../atoms/Navigation';

const Events = () => {
    return (
        <div className='page'>
            <Navigation/>
            <div className='right-page'>
                <Header/>
                Events
            </div>
        </div>
    );
};

export default Events;