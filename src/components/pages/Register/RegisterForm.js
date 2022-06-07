import React from 'react'
import {InputSimple} from '../../atoms/Input'
const RegisterForm = () => {
	return (
		<>
			<div className='form-grid'>
				<InputSimple id='prenom' placeholder='Votre prénom' type='text'>
					Prénom
				</InputSimple>
				<InputSimple id='nom' placeholder='Votre nom' type='text'>
					Nom
				</InputSimple>
			</div>
			<div className='form-grid'>
				<InputSimple id='email' placeholder='Votre adresse e-mail' type='email'>
					E-mail
				</InputSimple>
				<InputSimple id='phone' placeholder='Votre numéro de téléphone'>
					Téléphone
				</InputSimple>
			</div>
			<div className='form-grid'>
				<InputSimple id='password' placeholder='Votre mot de passe'>
					Mot de passe
				</InputSimple>
				<InputSimple id='pwdConfirm' placeholder='Confirmation du mot de passe'>
					Confirmation du mot de passe
				</InputSimple>
			</div>
			<InputSimple id='numCard' placeholder='Votre numéro de carte'>
				Numéro carte
			</InputSimple>
		</>
	)
}

export default RegisterForm
