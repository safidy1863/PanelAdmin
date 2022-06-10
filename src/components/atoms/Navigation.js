import {faGripfire} from '@fortawesome/free-brands-svg-icons'
import { faCalendarCheck, faCog, faList, faThLarge, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom"
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

			<div className='list-navigation'>
				<NavLink to="/" className={(nav)=> nav.isActive ? 'nav-active' : 'nav'}><FontAwesomeIcon icon={faThLarge}/>Tableau de bord</NavLink>
				<NavLink to="/clients" className={nav => nav.isActive ? 'nav-active' : 'nav'}><FontAwesomeIcon icon={faUserAlt}/>Clients</NavLink>
				<NavLink to="/events" className={nav => nav.isActive ? 'nav-active' : 'nav'}><FontAwesomeIcon icon={faCalendarCheck}/>Evénnement</NavLink>
				<NavLink to="/settings" className={nav => nav.isActive ? 'nav-active' : 'nav'}><FontAwesomeIcon icon={faCog}/>Paramètres</NavLink>
			</div>
		</div>
	)
}

export default Navigation
