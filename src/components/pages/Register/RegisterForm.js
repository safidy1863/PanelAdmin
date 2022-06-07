import React from 'react'

export const InputRegister = (props) => {
	const {id, placeholder, type, name, value, onChange, children} = props

	return (
		<div className='input input-register'>
			{children && <label htmlFor={id}>{children}</label>}
			<input
				id={id}
				placeholder={placeholder}
				type={type}
				name={name}
				value={value[name]}
				onChange={(e) => onChange(e.target)}
			/>
		</div>
	)
}

export const RegisterForm = ({value, onChange}) => {
	return (
		<>
			<div className='form-grid'>
				<InputRegister
					id='prenom'
					placeholder='Votre prénom'
					type='text'
					name='firstName'
					value={value}
					onChange={onChange}>
					Prénom
				</InputRegister>
				<InputRegister
					id='nom'
					placeholder='Votre nom'
					type='text'
					name='lastName'
					value={value}
					onChange={onChange}>
					Nom
				</InputRegister>
			</div>
			<div className='form-grid'>
				<InputRegister
					id='email'
					placeholder='Votre adresse e-mail'
					type='email'
					name='email'
					value={value}
					onChange={onChange}>
					E-mail
				</InputRegister>
				<InputRegister
					id='phone'
					placeholder='Votre numéro de téléphone'
					name='phone'
					value={value}
					onChange={onChange}>
					Téléphone
				</InputRegister>
			</div>
			<div className='form-grid'>
				<InputRegister
					id='password'
					placeholder='Votre mot de passe'
					name='password'
					value={value}
					onChange={onChange}>
					Mot de passe
				</InputRegister>
				{/*<InputRegister
					id='pwdConfirm'
					placeholder='Confirmation du mot de passe'
					name='pwdConfirm'
					value={value}
					onChange={onChange}>
					Confirmation du mot de passe
				</InputRegister>*/
				}
			</div>
			<InputRegister
				id='numCard'
				placeholder='Votre numéro de carte'
				name='cardNumber'
				value={value}
				onChange={onChange}>
				Numéro carte
			</InputRegister>
		</>
	)
}
