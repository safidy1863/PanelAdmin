import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from "jwt-decode"

export const authentication = createSlice({
	name: 'Authentication',
	initialState: {token: '',roles: ''},
	reducers: {
		login: (state, action) => {
			return {token: action.payload.token, roles: action.payload.roles}
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
