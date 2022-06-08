import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import LoginContent from './content-login'
import {LoginForm} from './LoginForm'
import {useDispatch} from "react-redux"
import { loginClient } from '../../../context/authentication'

const Login = () => {
	const dispatch = useDispatch()
	const [viewPwd, setViewPwd] = useState(false)
	const [loginForm, setLoginForm] = useState({email: '', password: ''})

	const viewPassword = () => {
		setViewPwd((v) => !v)
	}
	const  handleLoginChange = (e) => {
		setLoginForm(c => ({...c, [e.name]:e.value}))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(loginClient(loginForm))
	}

	return (
		<div className='registerLogin'>
			<LoginContent>
				<form onSubmit={handleSubmit}>
					<LoginForm pwd={viewPwd} viewPassword={viewPassword} onChange={handleLoginChange}/>
					<div className='group-button'>
						<button className="button button-round" type="submit">Se connecter</button>
						<Link to='/register'>
							<button className="button button-round">S'inscrire</button>
						</Link>
					</div>
				</form>
			</LoginContent>
		</div>
	)
}

export default Login
