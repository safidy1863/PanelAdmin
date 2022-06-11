import {faGripfire} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {NavLink} from 'react-router-dom'

const ForgotPassword = () => {
	return (
		<div className='registerLogin'>
			<div className='login-register-content'>
				<div className='logo-content'>
					<div className='logo'>
						<FontAwesomeIcon icon={faGripfire} />
					</div>
					<span>e-Ticket</span>
				</div>
				<h3>Mot de passe oublié</h3>
				<form>
					<div className='input-group'>
						<label htmlFor='email'>E-mail</label>
						<input id='email' placeholder='Adresse e-mail' type='email' name='email' />
					</div>
					<button type='submit'>Récuperer mon mot de passe</button>
				</form>

				<span className='link-register-login'>
					<NavLink to='/'>Annuler</NavLink>
				</span>
			</div>
		</div>
	)
}

export default ForgotPassword
