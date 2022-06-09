import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const authentication = createSlice({
	name: 'Authentication',
	initialState: {token: '', admin: '', statusLogin: ''},
	reducers: {
		login: (state, action) => {
			return {
				token: action.payload.token,
				admin: action.payload.roles.some((role) => role == 'ADMIN'),
			}
		},
		changeStatus: (state, action) => {
			return {...state, statusLogin: action.payload}
		},
	},
})

export const {login, changeStatus} = authentication.actions

export const loginClient = (client) => (dispatch) => {
	axios
		.post('http://localhost:8080/login', client)
		.then((e) => {
			dispatch(login(e.data))
			dispatch(restoreStatus())
		})
		.catch((error) => {
			let message = error.response.data
			if (message == undefined) message = 'Erreur du serveur'
			else message = message.message
			dispatch(changeStatus(message))
			console.log(error)
		})
}

export const restoreStatus = () => (dispatch) => {
	dispatch(changeStatus(''))
}
