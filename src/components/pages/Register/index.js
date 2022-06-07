import React, { useState } from 'react'
import {buttonRed} from '../../../styles/const/const'
import {ButtonSimple} from '../../atoms/Button'
import {InputSimple} from '../../atoms/Input'
import RegisterContent from './content-Register'
import {RegisterForm} from './RegisterForm'

const Register = () => {
	const [registerValue, setRegisterValue] = useState({
		lastName:"", firstName:"", email:"",password:"",phone:"",cardNumber:""
	});
	const handleInputChange = (e) => {
		setRegisterValue({...registerValue, [e.name]:e.value})
	}
	console.log(registerValue);
	return (
		<div className='registerLogin'>
			<RegisterContent>
				<h3>Inscription</h3>
				<form>
					<RegisterForm onChange={handleInputChange} value={registerValue}/>
					<ButtonSimple style={{backgroundColor: 'red', color: 'white', width: '50%'}}>
						Je m'inscris
					</ButtonSimple>
				</form>
			</RegisterContent>
		</div>
	)
}

export default Register
