import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'

export const LoginForm = (props) => {
	const {pwd, onChange, value, viewPassword} = props
	const {email, password} = value
	const handleInputChange = (e) => {
		onChange(e.target)
	}
	return (
		<>
			<div className='input-group'>
				<label htmlFor='email'>E-mail</label>
				<input
					id='email'
					placeholder='Adresse e-mail'
					type='email'
					name='email'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			<div className='input-group'>
				<label htmlFor='pwd'>Mot de pase</label>
				<div className='input-password'>
					<input
						id='pwd'
						placeholder='Mot de passe'
						type={pwd ? 'text' : 'password'}
						name='password'
						value={password}
						onChange={handleInputChange}
					/>
					<FontAwesomeIcon
						icon={pwd ? faEyeSlash : faEye}
						onClick={viewPassword}
					/>
				</div>
			</div>
		</>
	)
}
