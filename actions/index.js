// profile actions
export function profileGet(username) {
	return {
		type: 'PROFILE_GET',
		username
	}
}
export function profileBegin() {
	return {
		type: 'PROFILE_REQ_BEGIN'
	}
}

export function profileReceived(profile) {
	return {
		type: 'PROFILE_REQ_RECEIVED',
		profile
	}
}

export function profileError(error) {
	return {
		type: 'PROFILE_REQ_ERROR',
		error
	}
}

export function userBitsGet(username) {
	return {
		type: 'USER_BITS_GET',
		username
	}
}

export function userBitsBegin() {
	return {
		type: 'USER_BITS_BEGIN'
	}
}

export function userBitsReceived() {
	return {
		type: 'USER_BITS_RECEIVED'
	}
}

export function userBitsError(error) {
	return {
		type: 'USER_BITS_ERROR', error
	}
}

// // general actions
// export const CLEAR_ERROR = 'CLEAR_ERROR'
// export function clearError() {
// 	return {
// 		type: CLEAR_ERROR
// 	}
// }



// export const PROCESS_ERROR = 'PROCESS_ERROR'
// export const ERROR_TYPES = {
// 	API_INACCESSIBLE: 'API_INACCESSIBLE',
// 	NOT_FOUND: 'NOT_FOUND',
// 	OTHER_ERROR: 'OTHER_ERROR',
// 	INCORRECT_CREDENTIALS: 'INCORRECT_CREDENTIALS'
// }
// export function processError(error) {
// 	let status
// 	switch (error) {
// 		case ERROR_TYPES.NOT_FOUND:
// 			status = 404
// 			break
// 		case ERROR_TYPES.INCORRECT_CREDENTIALS:
// 			status = 401
// 			break
// 		case ERROR_TYPES.API_INACCESSIBLE:
// 		case ERROR_TYPES.OTHER_ERROR:
// 		default:
// 			status = 500
// 			break
// 	}
// 	return {
// 		type: PROCESS_ERROR,
// 		error,
// 		status
// 	}
// }

// export function getUserInfo(username) {
// 	return dispatch => {
// 		dispatch(requestUserInfo(username))
// 		const payload = {
// 			method: 'POST',
// 			cache: 'no-cache',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({ username })
// 		}
// 		return fetch(`${API_ROOT}/user/info`, payload)
// 			.then(response => response.json(), err => {
// 				// this is a fetch error
// 				dispatch(processError(ERROR_TYPES.API_INACCESSIBLE))
// 				return Promise.reject(err)
// 			})
// 			.then(json => {
// 				switch (json.status) {
// 					case 200:
// 						dispatch(receiveUserInfo(username, json))
// 						return
// 					case 404:
// 						dispatch(processError(ERROR_TYPES.NOT_FOUND))
// 						break
// 					case 400:
// 					case 500:
// 					default:
// 						dispatch(processError(ERROR_TYPES.OTHER_ERROR))

// 				}
// 				return Promise.reject(null)
// 			})
// 			.catch(() => dispatch(rejectUserInfo()))
// 	}
// }

// // user bits
// export const REQUEST_USER_BITS = 'REQUEST_USER_BITS'
// function requestUserBits(username) {
// 	return {
// 		type: REQUEST_USER_BITS,
// 		username
// 	}
// }

// export const RECEIVE_USER_BITS = 'RECEIVE_USER_BITS'
// function receiveUserBits(username, infoJSON) {
// 	return {
// 		type: RECEIVE_USER_BITS,
// 		username,
// 		bits: infoJSON.result.docs,
// 		curBitPage: infoJSON.result.page,
// 		totalBitPages: infoJSON.result.totalPages
// 	}
// }

// export const REJECT_USER_BITS = 'REJECT_USER_BITS'
// function rejectUserBits() {
// 	return {
// 		type: REJECT_USER_BITS
// 	}
// }

// export function getUserBits(username) {
// 	return (dispatch, getState) => {
// 		if (getState().curBitPage + 1 > getState().totalBitPages) {
// 			return
// 		}
// 		dispatch(requestUserBits(username))
// 		const payload = {
// 			method: 'POST',
// 			cache: 'no-cache',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({ page: getState().curBitPage + 1 })
// 		}
// 		return fetch(`${API_ROOT}/bit/u/${username}`, payload)
// 			.then(
// 				response => response.json(),
// 				err => {
// 					dispatch(processError(ERROR_TYPES.API_INACCESSIBLE))
// 					return Promise.reject(err)
// 				}
// 			)
// 			.then(json => {
// 				switch (json.status) {
// 					case 200:
// 						dispatch(receiveUserBits(username, json))
// 						return
// 					case 404:
// 						dispatch(processError(ERROR_TYPES.NOT_FOUND))
// 						break
// 					case 400:
// 					case 500:
// 					default:
// 						dispatch(processError(ERROR_TYPES.OTHER_ERROR))

// 				}
// 				return Promise.reject(null)
// 			})
// 			.catch(() => dispatch(rejectUserBits()))
// 	}
// }

// // bit info
// export const REQUEST_BIT_INFO = 'REQUEST_BIT_INFO'
// function requestBitInfo(bitID) {
// 	return {
// 		type: REQUEST_BIT_INFO,
// 		bitID
// 	}
// }

// export const RECEIVE_BIT_INFO = 'RECEIVE_BIT_INFO'
// function receiveBitInfo(bitID, infoJSON) {
// 	return {
// 		type: RECEIVE_BIT_INFO,
// 		bitID,
// 		info: infoJSON
// 	}
// }

// export const REJECT_BIT_INFO = 'REJECT_BIT_INFO'
// function rejectBitInfo() {
// 	return {
// 		type: REJECT_BIT_INFO
// 	}
// }

// export function getBitInfo(bitID) {
// 	return (dispatch) => {
// 		dispatch(requestBitInfo(bitID))
// 		const payload = {
// 			method: 'GET',
// 			cache: 'no-cache'
// 		}
// 		return fetch(`${API_ROOT}/bit/${bitID}`, payload)
// 			.then(
// 				response => response.json(),
// 				err => {
// 					dispatch(processError(ERROR_TYPES.API_INACCESSIBLE))
// 					return Promise.reject(err)
// 				}
// 			)
// 			.then(json => {
// 				switch (json.status) {
// 					case 200:
// 						dispatch(receiveBitInfo(bitID, json))
// 						return
// 					case 400:
// 					case 404:
// 						dispatch(processError(ERROR_TYPES.NOT_FOUND))
// 						break
// 					case 500:
// 					default:
// 						dispatch(processError(ERROR_TYPES.OTHER_ERROR))

// 				}
// 				return Promise.reject(null)
// 			})
// 			.catch(() => dispatch(rejectBitInfo()))
// 	}
// }

// // logging in
// export const REQUEST_LOGIN_TOKEN = 'REQUEST_LOGIN_TOKEN'
// function requestLoginToken() {
// 	return {
// 		type: REQUEST_LOGIN_TOKEN
// 	}
// }

// export const RECEIVE_LOGIN_TOKEN = 'RECEIVE_LOGIN_TOKEN'
// function receiveLoginToken(json) {
// 	return {
// 		type: RECEIVE_LOGIN_TOKEN,
// 		token: json.token
// 	}
// }

// export const REJECT_LOGIN_TOKEN = 'REJECT_LOGIN_TOKEN'
// function rejectLoginToken() {
// 	return {
// 		type: REJECT_LOGIN_TOKEN
// 	}
// }

// export function login(username, password) {
// 	return (dispatch) => {
// 		dispatch(requestLoginToken())
// 		const payload = {
// 			method: 'POST',
// 			cache: 'no-cache',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({ username, password, client: CLIENT_NAME || 'kilobit - unknown' })
// 		}
// 		return fetch(`${API_ROOT}/login`, payload)
// 			.then(
// 				response => response.json(),
// 				err => {
// 					dispatch(processError(ERROR_TYPES.API_INACCESSIBLE))
// 					return Promise.reject(err)
// 				}
// 			)
// 			.then(json => {
// 				switch (json.status) {
// 					case 200:
// 						dispatch(receiveLoginToken(json))
// 						return
// 					case 401:
// 						dispatch(processError(ERROR_TYPES.INCORRECT_CREDENTIALS))
// 						break
// 					case 400:
// 					case 404:
// 						dispatch(processError(ERROR_TYPES.NOT_FOUND))
// 						break
// 					case 500:
// 					default:
// 						dispatch(processError(ERROR_TYPES.OTHER_ERROR))
// 				}
// 				return Promise.reject(null)
// 			})
// 			.catch(() => dispatch(rejectLoginToken()))
// 	}
// }