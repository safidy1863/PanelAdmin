import React from 'react'
import Header from '../../atoms/Header'
import Navigation from '../../atoms/Navigation'

const Dashboard = () => {
	return (
		<div className='page'>
			<Navigation />
			<div className='right-page'>
                <Header/>
				Tableau
            </div>
		</div>
	)
}

export default Dashboard
