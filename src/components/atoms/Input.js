import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

export const InputRound = (props) => {
	const {id, placeholder, type, iconLeft, iconRight, onClick, children} = props
	return (
		<div className='input-round'>
			<label htmlFor={id}>{children}</label>
			<div className='input-icon'>
				<input id={id} placeholder={placeholder} type={type} />
				{iconLeft && <FontAwesomeIcon icon={iconLeft} className='left' /> }
				{iconRight && <FontAwesomeIcon icon={iconRight} className='right' onClick={onClick} /> }
			</div>
		</div>
	)
}
