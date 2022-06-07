import {BrowserRouter,Routes,Route} from "react-router-dom"
import ForgotPassword from "./components/pages/Forgot-Password"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/forgot-password" element={<ForgotPassword/>}/>
				<Route path="/register" element={<Register/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
