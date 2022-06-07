import React from 'react';
import { Link } from 'react-router-dom';
import { IconRound } from '../../atoms/Icon';


const RegisterContent = ({children}) => {
    return (
        <div className='register-login-content'>
			<img src='img/login.jpg' alt='logo-login' className='img-left'/>
			<div className='right-registerLogin'>
				<img src='img/bg-login.jpg' alt='logo' className='logo'/>
				<h2>e-Ticket Reservation</h2>
				{children}
			</div>
		</div>
    );
};

export default RegisterContent;