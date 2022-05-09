import {CHANGE_SEARCH_FIELD} from './constants.js';

import {REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAIL}
from './constants.js';

export const setSearchFieldAction = (text) =>{
	return({
		type: CHANGE_SEARCH_FIELD,
		payload: text
	})
}

export const requestRobotsAction =  (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING})
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((data)=>{
		return (
			data.json()
	)})
	.then((data)=>{
		console.log(data)
		dispatch({
			type: REQUEST_ROBOTS_SUCCESS, 
			payload: data})
	})
	.catch((err)=>{
		dispatch({
			type: REQUEST_ROBOTS_FAIL,
		    payload: err})
	})
}