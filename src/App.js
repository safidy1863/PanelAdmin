import {BrowserRouter,Routes,Route} from "react-router-dom"
import ForgotPassword from "./components/pages/Forgot-Password"
import Login from "./components/pages/Login"
function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/forgot-password" element={<ForgotPassword/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
