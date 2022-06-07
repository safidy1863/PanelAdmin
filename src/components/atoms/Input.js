import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

//Refactoring HOC

export const InputRound = (props) => {
	const {id, placeholder, type, iconLeft, iconRight, onClick, children} = props
	return (
		<div className='input input-round'>
			{children && <label htmlFor={id}>{children}</label>}
			<div className='input-icon'>
				<input id={id} placeholder={placeholder} type={type} />
				{iconLeft && <FontAwesomeIcon icon={iconLeft} className='left' /> }
				{iconRight && <FontAwesomeIcon icon={iconRight} className='right' onClick={onClick} /> }
			</div>
		</div>
	)
}

export const InputSimple = (props) => {
	const {id, placeholder, type, iconLeft, iconRight, onClick, children} = props
	return (
		<div className='input input-simple'>
			{children && <label htmlFor={id}>{children}</label>}
			<div className='input-icon'>
				<input id={id} placeholder={placeholder} type={type} />
				{iconLeft && <FontAwesomeIcon icon={iconLeft} className='left' /> }
				{iconRight && <FontAwesomeIcon icon={iconRight} className='right' onClick={onClick} /> }
			</div>
		</div>
	)
}