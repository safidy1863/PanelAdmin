import {faBell, faEnvelope, faSearch, faSun} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = ({title="Tableau de bord"}) => {
	return (
		<div className='header'>
			<span className='title'>{title}</span>
			<div className='header-right'>
				<div className='search-bar'>
					<input type='text' placeholder='Rechercher' />
					<FontAwesomeIcon icon={faSearch} />
				</div>
                {/*Switch-theme*/}
				<div className='icon-menu'>
					<FontAwesomeIcon icon={faSun} />
				</div>

				<div className='icon-menu'>
                    <FontAwesomeIcon icon={faBell}/>
                </div>

                <div className='icon-menu'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                {/*Admin */}
                <div className='admin'>
                    <img src='img/login.jpg' alt='admin'/>
					<span>Admin</span>
                </div>
			</div>
		</div>
	)
}

export default Header
