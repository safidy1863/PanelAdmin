import {faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const LoginContent = ({children}) => {
	return (
		<div className='login-content'>
			<img src='img/login.jpg' alt='logo-login' />
			<div className='right-element-login'>
				<h2>e-Ticket Reservation</h2>
				{children}
				<div>
					<input type='checkbox' id='remember' />
					<label htmlFor='remember'>Remember me</label>
				</div>
				<h3>or you can join with</h3>
				<div>
					<FontAwesomeIcon icon={faGoogle} />
					<FontAwesomeIcon icon={faFacebook} />
					<FontAwesomeIcon icon={faTwitter} />
				</div>
			</div>
		</div>
	)
}

export default LoginContent
