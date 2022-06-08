import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({authorize, redirect = '/login', children}) => {
	if (!authorize) {
		return <Navigate to={redirect} replace />
	}
	return children ? children : <Outlet />
}

export default ProtectedRoute
