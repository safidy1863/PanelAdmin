import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const clientContext = createSlice({
	name: 'Client-Context',
	initialState: {},
	reducers: {
		listClient: (state, action) => {
			state = action.payload
			return state
		},
		addClient: (state, action) => {},
	},
})

export const {listClient, addClient} = clientContext.actions

export const addNewClient = (newClient) => (dispatch) => {
	axios
		.post('http://localhost:8080/register', newClient)
		.then((e) => console.log(e))
		.catch((error) => console.log(error))
}
