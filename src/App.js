import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/atoms/ProtectedRoute'
import Dashboard from './components/pages/Dashboard'
import ForgotPassword from './components/pages/Forgot-Password'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import {useSelector} from "react-redux"

function App() {
	const {token,admin} = useSelector(state => state.authentication)
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
				<Route path='/register' element={<Register />} />
				<Route element={<ProtectedRoute authorize={token && admin}/>}>
					<Route path='/' element={<Dashboard/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
