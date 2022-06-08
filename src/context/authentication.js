import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from "jwt-decode"

export const authentication = createSlice({
	name: 'Authentication',
	initialState: {token: '', admin: ''},
	reducers: {
		login: (state, action) => {
			return {token: action.payload.token, admin: action.payload.roles.some(role => role == 'ADMIN')}
		},
	},
})

export const {login} = authentication.actions

export const loginClient = (client) => (dispatch) => {
	axios
		.post('http://localhost:8080/login', client)
		.then((e) => {
			dispatch(login(e.data))
		})
		.catch((error) => console.log(error))
}
