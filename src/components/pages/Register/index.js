import React from 'react'
import {buttonRed} from '../../../styles/const/const'
import {ButtonSimple} from '../../atoms/Button'
import {InputSimple} from '../../atoms/Input'
import RegisterContent from './content-Register'
import RegisterForm from './RegisterForm'

const Register = () => {
	return (
		<div className='registerLogin'>
			<RegisterContent>
				<h3>Inscription</h3>
				<form>
					<RegisterForm />
					<ButtonSimple style={{backgroundColor: 'red', color: 'white', width: '50%'}}>
						Je m'inscris
					</ButtonSimple>
				</form>
			</RegisterContent>
		</div>
	)
}

export default Register
