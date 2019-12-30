import fetch from 'isomorphic-unfetch'


const { API_ROOT } = process.env

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
function requestUserInfo(username) {
	return {
		type: REQUEST_USER_INFO,
		username
	}
}

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
function receiveUserInfo(username, infoJSON) {
	return {
		type: RECEIVE_USER_INFO,
		username,
		info: infoJSON.result
	}
}

export function getUserInfo(username) {
	return dispatch => {
		dispatch(requestUserInfo(username))
		const payload = {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username })
		}
		return fetch(`${API_ROOT}/user/info`, payload)
			.then(response => response.json(), err => console.error(err))
			.then(json => dispatch(receiveUserInfo(username, json)))
	}
}