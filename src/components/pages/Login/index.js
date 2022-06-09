import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import LoginContent from './content-login'
import {LoginForm} from './LoginForm'
import {useDispatch, useSelector} from 'react-redux'
import {loginClient, restoreStatus} from '../../../context/authentication'
import Alert from '../../atoms/Alert'

const Login = () => {
	const [viewPwd, setViewPwd] = useState(false)
	const [loginForm, setLoginForm] = useState({email: '', password: ''})
	const [displayAlert, setDisplayAlert] = useState(false)
	const {admin, statusLogin} = useSelector((state) => state.authentication)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const viewPassword = () => {
		setViewPwd((v) => !v)
	}
	const handleLoginChange = (e) => {
		setLoginForm((c) => ({...c, [e.name]: e.value}))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(loginClient(loginForm))
		setLoginForm({email: '', password: ''})
	}

	/**
	 * Redirection to dashboard page or client page
	 */
	useEffect(() => {
		if (admin) {
			navigate('/', {replace: true})
		}
	}, [admin, navigate])

	/**
	 * Timer displaying alert
	 */
	useEffect(() => {
		if (statusLogin != '') setDisplayAlert(true)
		const timer = setTimeout(() => {
			setDisplayAlert(false)
			dispatch(restoreStatus())
		}, 3000)
		return function () {
			clearTimeout(timer)
		}
	}, [statusLogin, dispatch])
	
	return (
		<div className='registerLogin'>
			<LoginContent/>
			{displayAlert ? <Alert message={statusLogin} /> : null}
		</div>
	)
}

export default Login
