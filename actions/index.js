import fetch from 'isomorphic-unfetch'
const { API_ROOT } = process.env

// general actions
export const CLEAR_ERROR = 'CLEAR_ERROR'
export function clearError() {
	return {
		type: CLEAR_ERROR
	}
}

// user info
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

export const REJECT_USER_INFO = 'REJECT_USER_INFO'
function rejectUserInfo() {
	return {
		type: REJECT_USER_INFO
	}
}


export const PROCESS_ERROR = 'PROCESS_ERROR'
export const ERROR_TYPES = {
	API_INACCESSIBLE: 'API_INACCESSIBLE',
	NOT_FOUND: 'NOT_FOUND',
	'OTHER_ERROR': 'OTHER_ERROR'
}
export function processError(error) {
	let status
	switch (error) {
		case ERROR_TYPES.NOT_FOUND:
			status = 404
			break
		case ERROR_TYPES.API_INACCESSIBLE:
		case ERROR_TYPES.OTHER_ERROR:
		default:
			status = 500
			break
	}
	return {
		type: PROCESS_ERROR,
		error,
		status
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
			.then(response => response.json(), err => {
				// this is a fetch error
				dispatch(processError(ERROR_TYPES.API_INACCESSIBLE))
				return Promise.reject(err)
			})
			.then(json => {
				switch (json.status) {
					case 200:
						dispatch(receiveUserInfo(username, json))
						return
					case 404:
						dispatch(processError(ERROR_TYPES.NOT_FOUND))
						break
					case 400:
					case 500:
					default:
						dispatch(processError(ERROR_TYPES.OTHER_ERROR))

				}
				return Promise.reject(null)
			})
			.catch(() => dispatch(rejectUserInfo()))
	}
}

// user bits
export const REQUEST_USER_BITS = 'REQUEST_USER_BITS'
function requestUserBits(username) {
	return {
		type: REQUEST_USER_BITS,
		username
	}
}

export const RECEIVE_USER_BITS = 'RECEIVE_USER_BITS'
function receiveUserBits(username, infoJSON) {
	return {
		type: RECEIVE_USER_BITS,
		username,
		bits: infoJSON.result.docs,
		curBitPage: infoJSON.result.page,
		totalBitPages: infoJSON.result.totalPages
	}
}

export const REJECT_USER_BITS = 'REJECT_USER_BITS'
function rejectUserBits() {
	return {
		type: REJECT_USER_BITS
	}
}

export function getUserBits(username) {
	return (dispatch, getState) => {
		if (getState().curBitPage + 1 > getState().totalBitPages) {
			return
		}
		dispatch(requestUserBits(username))
		const payload = {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ page: getState().curBitPage + 1 })
		}
		return fetch(`${API_ROOT}/bit/u/${username}`, payload)
			.then(
				response => response.json(),
				err => {
					dispatch(processError(ERROR_TYPES.API_INACCESSIBLE))
					return Promise.reject(err)
				}
			)
			.then(json => {
				switch (json.status) {
					case 200:
						dispatch(receiveUserBits(username, json))
						return
					case 404:
						dispatch(processError(ERROR_TYPES.NOT_FOUND))
						break
					case 400:
					case 500:
					default:
						dispatch(processError(ERROR_TYPES.OTHER_ERROR))

				}
				return Promise.reject(null)
			})
			.catch(() => dispatch(rejectUserBits()))
	}
}

// bit info
export const REQUEST_BIT_INFO = 'REQUEST_BIT_INFO'
function requestBitInfo(bitID) {
	return {
		type: REQUEST_BIT_INFO,
		bitID
	}
}

export const RECEIVE_BIT_INFO = 'RECEIVE_BIT_INFO'
function receiveBitInfo(bitID, infoJSON) {
	return {
		type: RECEIVE_BIT_INFO,
		bitID,
		info: infoJSON
	}
}

export const REJECT_BIT_INFO = 'REJECT_BIT_INFO'
function rejectBitInfo() {
	return {
		type: REJECT_BIT_INFO
	}
}

export function getBitInfo(bitID) {
	return (dispatch) => {
		dispatch(requestBitInfo(bitID))
		const payload = {
			method: 'GET',
			cache: 'no-cache'
		}
		return fetch(`${API_ROOT}/bit/${bitID}`, payload)
			.then(
				response => response.json(),
				err => {
					dispatch(processError(ERROR_TYPES.API_INACCESSIBLE))
					return Promise.reject(err)
				}
			)
			.then(json => {
				switch (json.status) {
					case 200:
						dispatch(receiveBitInfo(bitID, json))
						return
					case 400:
					case 404:
						dispatch(processError(ERROR_TYPES.NOT_FOUND))
						break
					case 500:
					default:
						dispatch(processError(ERROR_TYPES.OTHER_ERROR))

				}
				return Promise.reject(null)
			})
			.catch(() => dispatch(rejectBitInfo()))
	}
}