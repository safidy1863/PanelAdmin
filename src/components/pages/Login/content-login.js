import {faGripfire} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'
import {LoginForm} from './LoginForm'

const LoginContent = (props) => {
	const {viewPassword, viewPwd, loginForm, handleLoginChange, handleSubmit} = props
	return (
		<div className='login-register-content'>
			<div className='logo-content'>
				<div className='logo'>
					<FontAwesomeIcon icon={faGripfire} />
				</div>
				<span>e-Ticket</span>
			</div>
			<h3>Se connecter</h3>
			<form onSubmit={handleSubmit}>
				<LoginForm
					pwd={viewPwd}
					viewPassword={viewPassword}
					value={loginForm}
					onChange={handleLoginChange}
				/>
				<div className='remembers'>
					<input type='checkbox' id='remember' />
					<label htmlFor='remember'>Se souviens de moi</label>
				</div>
				<Link to='/forgot-password' className='forgot-password'>
					Mot de passe oublié?
				</Link>
				<button type='submit'>Je me connecte</button>
			</form>

			<span className='link-register-login'>
				Pas encore inscris? <Link to='/register'>s'inscrire</Link>
			</span>
		</div>
	)
}

export default LoginContent
