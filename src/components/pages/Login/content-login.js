import {faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'

import React from 'react'
import { Link } from 'react-router-dom'
import { IconRound } from '../../atoms/Icon'

const LoginContent = ({children}) => {
	return (
		<div className='login-content'>
			<img src='img/login.jpg' alt='logo-login' className='img-left'/>
			<div className='right-login'>
				<img src='img/bg-login.jpg' alt='logo' className='logo'/>
				<h2>e-Ticket Reservation</h2>
				{children}
				<div className='action-login'>
					<div className='remembers'>
						<input type='checkbox' id='remember' />
						<label htmlFor='remember'>Remember me</label>
					</div>
					<Link to="/forgot-password">Forgot password ?</Link>
				</div>
				<span>or you can join with</span>
				<div className='social-icons'>
					<IconRound>{faGoogle}</IconRound>
					<IconRound>{faFacebook}</IconRound>
					<IconRound>{faTwitter}</IconRound>
				</div>
			</div>
		</div>
	)
}

export default LoginContent
