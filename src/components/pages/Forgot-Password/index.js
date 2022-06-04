import React from 'react'
import { ButtonRound } from '../../atoms/Button'
import { InputRound } from '../../atoms/Input'

const ForgotPassword = () => {
	return (
		<div className='login'>
			<div className='login-content'>
				<img src='img/login.jpg' alt='logo-login' className='img-left' />
                <div className='forgot-password'>
                    <h2>Mot de passe oublié?</h2>
                    <InputRound type='email' placeholder='Entrez votre adresse e-mail'/>
                    <div className='group-button'>
                        <ButtonRound>Récupérer mon mdp</ButtonRound>
                        <ButtonRound>Annuler</ButtonRound>
                    </div>
                </div>
			</div>
		</div>
	)
}

export default ForgotPassword
