import {faGripfire} from '@fortawesome/free-brands-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const Navigation = () => {
	return (
		<div className='navigation'>
			<div className='logo-content'>
				<div className='logo-content-left'>
					<div className='logo'>
						<FontAwesomeIcon icon={faGripfire} />
					</div>
                    <span>E-Ticket</span>
				</div>
                <FontAwesomeIcon icon={faList} className='list-icon'/>
			</div>


		</div>
	)
}

export default Navigation
