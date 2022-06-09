import axios from 'axios'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addNewClient} from '../../../context/clientContext'
import RegisterContent from './content-Register'
import {RegisterForm} from './RegisterForm'

const Register = () => {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const [registerValue, setRegisterValue] = useState({
		lastName: '',
		firstName: '',
		email: '',
		password: '',
		phone: '',
		cardNumber: '',
	})
	const handleInputChange = (e) => {
		setRegisterValue((v) => ({...v, [e.name]: e.value}))
	}

	const register = async (e) => {
		e.preventDefault()
		await dispatch(addNewClient(registerValue))
		setRegisterValue({
			lastName: '',
			firstName: '',
			email: '',
			password: '',
			phone: '',
			cardNumber: '',
		})
		navigate('/login', {replace: true})
	}

	return (
		<div className='registerLogin'>
			<RegisterContent>
				<h3>Inscription</h3>
				<form onSubmit={register}>
					<RegisterForm onChange={handleInputChange} value={registerValue} />
					<button
						style={{backgroundColor: 'red', color: 'white', width: '50%'}}
						className='button button-simple'
						type='submit'>
						Je m'inscris
					</button>
				</form>
			</RegisterContent>
		</div>
	)
}

export default Register
