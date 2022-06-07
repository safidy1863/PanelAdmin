import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import {buttonRed} from '../../../styles/const/const'
import {ButtonRound} from '../../atoms/Button'
import {InputRound} from '../../atoms/Input'
import LoginContent from './content-login'

const Login = () => {
	const [viewPwd,setViewPwd] = useState(false)
	const viewPassword=()=>{
		setViewPwd(v => !v)
	}
	return (
		<div className='registerLogin'>
			<LoginContent>
				<form>
					<InputRound id='email' type='email' placeholder='Votre adresse e-mail' iconLeft={faEnvelope}>
						e-mail
					</InputRound>
					<InputRound
						id='pwd'
						placeholder='Mot de passe'
						type={viewPwd? 'text' :'password'}
						iconLeft={faKey}
						iconRight={viewPwd ? faEyeSlash : faEye}
						onClick={viewPassword}
						>
						Mot de passe
					</InputRound>
					<div className='group-button'>
						<ButtonRound style={buttonRed}>Se connecter</ButtonRound>
						<ButtonRound>S'inscrire</ButtonRound>
					</div>
				</form>
			</LoginContent>
		</div>
	)
}

export default Login
