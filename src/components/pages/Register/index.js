import axios from 'axios'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addNewClient} from '../../../context/clientContext'
import RegisterContent from './content-Register'

const Register = () => {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const [registerValue, setRegisterValue] = useState({
		lastName: '',
		firstName: '',
		email: '',
		roles: '',
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
			roles: '',
			password: '',
			phone: '',
			cardNumber: '',
		})
		navigate('/login', {replace: true})
	}

	return (
		<div className='registerLogin'>
			<RegisterContent register={register} handleInputChange={handleInputChange} registerValue={registerValue}/>
		</div>
	)
}

export default Register
