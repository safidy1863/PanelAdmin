import React from 'react'
import {buttonRed} from '../../../styles/const/const'
import {ButtonRound} from '../../atoms/Button'
import { InputRound } from '../../atoms/Input'
import LoginContent from './content-login'

const Login = () => {
	return (
		<div className='login'>
            <LoginContent>
                <form>
                    <InputRound id='email' placeholder='Your e-mail'>e-mail</InputRound>
                    <InputRound id='pwd' placeholder='password'>Password</InputRound>
                    <ButtonRound style={buttonRed}>Login</ButtonRound>
                    <ButtonRound>Register</ButtonRound>
                </form>
            </LoginContent>
		</div>
	)
}

export default Login
