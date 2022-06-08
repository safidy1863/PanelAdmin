import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'

export const LoginForm = ({pwd, onChange,viewPassword}) => {
    const handleInputChange = (e) => {
        onChange(e.target)
    }
	return (
		<>
			<div className='input input-round'>
				<label htmlFor='email'>e-mail</label>
				<div className='input-icon'>
					<input id='email' placeholder='Adresse e-mail' type='email' name='email' onChange={handleInputChange}/>
					<FontAwesomeIcon icon={faEnvelope} className='left' />
				</div>
			</div>

			<div className='input input-round'>
				<label htmlFor='pwd'>Mot de pase</label>
				<div className='input-icon'>
					<input id='pwd' placeholder='Mot de passe' type={pwd ? 'text' : 'password'} name='password' onChange={handleInputChange}/>
					<FontAwesomeIcon icon={faKey} className='left' />
					<FontAwesomeIcon
						icon={pwd ? faEyeSlash : faEye}
						className='right'
						onClick={viewPassword}
					/>
				</div>
			</div>
		</>
	)
}
