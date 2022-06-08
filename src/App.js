import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/atoms/ProtectedRoute'
import Dashboard from './components/pages/Dashboard'
import ForgotPassword from './components/pages/Forgot-Password'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
				<Route path='/register' element={<Register />} />
				<Route element={<ProtectedRoute authorize={false}/>}>
					<Route path='/dashboard' element={<Dashboard/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
