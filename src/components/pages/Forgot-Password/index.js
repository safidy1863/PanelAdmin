import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
	return (
		<div className='registerLogin'>
			<div className='register-login-content'>
				<img src='img/login.jpg' alt='logo-login' className='img-left' />
                <div className='right-registerLogin'>
                    <h2>Mot de passe oublié?</h2>
                    <input type='email' placeholder='Entrez votre adresse e-mail'/>
                    <div className='group-button'>
                        <button className="button button-round">Récuperer mon mot de passe</button>
                        <NavLink to="/">
                            <button className="button button-round" >Annuler</button>
                        </NavLink>
                    </div>
                </div>
			</div>
		</div>
	)
}

export default ForgotPassword
