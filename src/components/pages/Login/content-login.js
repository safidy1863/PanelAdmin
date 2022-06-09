import {faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'

const LoginContent = ({children}) => {
	return (
		<div className='register-login-content'>
			<img src='img/login.jpg' alt='logo-login' className='img-left' />
			<div className='right-registerLogin'>
				<img src='img/bg-login.jpg' alt='logo' className='logo' />
				<h2>e-Ticket Reservation</h2>
				{children}
				<div className='action-login'>
					<div className='remembers'>
						<input type='checkbox' id='remember' />
						<label htmlFor='remember'>Se souviens de moi</label>
					</div>
					<Link to='/forgot-password'>Mot de passe oublié?</Link>
				</div>
				<span> ou vous pouvez connecter avec </span>
				<div className='social-icons'>
					<div className='icon-round'>
						<FontAwesomeIcon icon={faGoogle} />
					</div>
					<div className='icon-round'>
						<FontAwesomeIcon icon={faFacebook} />
					</div>
					<div className='icon-round'>
						<FontAwesomeIcon icon={faTwitter} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginContent
