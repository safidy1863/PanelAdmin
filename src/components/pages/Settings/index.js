import React from 'react';
import Header from '../../atoms/Header';
import Navigation from '../../atoms/Navigation';

const Settings = () => {
    return (
        <div className='page'>
            <Navigation/>
            <div className='right-page'>
                <Header/>
                Settings
            </div>
        </div>
    );
};

export default Settings;