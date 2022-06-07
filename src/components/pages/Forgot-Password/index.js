import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonRound } from '../../atoms/Button'
import { InputRound } from '../../atoms/Input'

const ForgotPassword = () => {
	return (
		<div className='registerLogin'>
			<div className='register-login-content'>
				<img src='img/login.jpg' alt='logo-login' className='img-left' />
                <div className='right-registerLogin'>
                    <h2>Mot de passe oublié?</h2>
                    <InputRound type='email' placeholder='Entrez votre adresse e-mail'/>
                    <div className='group-button'>
                        <ButtonRound>Récupérer mon mdp</ButtonRound>
                        <NavLink to="/">
                            <ButtonRound>Annuler</ButtonRound>
                        </NavLink>
                    </div>
                </div>
			</div>
		</div>
	)
}

export default ForgotPassword
