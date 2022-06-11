import {faGripfire} from '@fortawesome/free-brands-svg-icons'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'

const RegisterContent = ({register, handleInputChange, registerValue}) => {
	const {lastName,firstName,email,roles,password,phone,cardNumber} = registerValue

	const inputChange = (e) => {
		handleInputChange(e.target)
	}

	return (
		<div className='login-register-content'>
			<div className='logo-content'>
				<div className='logo'>
					<FontAwesomeIcon icon={faGripfire} />
				</div>
				<span>e-Ticket</span>
			</div>
			<h3>Inscription</h3>
			<form onSubmit={register}>
				<div className='input-inline'>
					<div className='input-group'>
						<label htmlFor='nom'>Nom</label>
						<input
							id='nom'
							placeholder='Votre nom'
							type='text'
							name='lastName'
							value={lastName}
							onChange={inputChange}
						/>
					</div>

					<div className='input-group'>
						<label htmlFor='prenom'>Prénom(s)</label>
						<input
							id='prenom'
							placeholder='Votre prénom'
							type='text'
							name='firstName'
							value={firstName}
							onChange={inputChange}
						/>
					</div>
				</div>
				<div className='input-inline'>
					<div className='input-group'>
						<label htmlFor='email'>E-mail</label>
						<input
							id='email'
							placeholder='Votre adresse e-mail'
							type='email'
							name='email'
							value={email}
							onChange={inputChange}
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='roles'>Roles</label>
						<select
							name='roles'
							id='roles'
							value={roles}
							onChange={inputChange}>
							<option value='USER'>Client</option>
							<option value='USER;ADMIN'>Administrateur</option>
						</select>
					</div>
				</div>
				<div className='input-inline'>
					<div className='input-group'>
						<label htmlFor='pwd'>Mot de pase</label>
						<div className='input-password'>
							<input
								id='pwd'
								placeholder='Mot de passe'
								type='password'
								name='password'
								value={password}
								onChange={inputChange}
							/>
							<FontAwesomeIcon icon={faEyeSlash} />
						</div>
					</div>

					<div className='input-group'>
						<label htmlFor='confPwd'>Confirmation du mot de pase</label>
						<div className='input-password'>
							<input
								id='confPwd'
								placeholder='Confirmation du mot de passe'
								type='password'
								name='password2'
							/>
							<FontAwesomeIcon icon={faEyeSlash} />
						</div>
					</div>
				</div>

				<div className='input-inline'>
					<div className='input-group'>
						<label htmlFor='phone'>Téléphone</label>
						<input
							id='phone'
							placeholder='Votre Numéro de téléphone'
							type='text'
							name='phone'
							value={phone}
							onChange={inputChange}
						/>
					</div>

					<div className='input-group'>
						<label htmlFor='cardNumber'>Numéro de la carte</label>
						<input
							id='cardNumber'
							placeholder='Votre numéro de la carte'
							type='text'
							name='cardNumber'
							value={cardNumber}
							onChange={inputChange}
						/>
					</div>
				</div>
				<button type='submit'>Je m'inscris</button>
			</form>

			<span className='link-register-login'>
				Déjà un compte? <Link to='/'>Se connecter</Link>
			</span>
		</div>
	)
}

export default RegisterContent
