// profile actions

/**
 * Action creator to initiate profile-getting saga.
 * Dispatching this will begin asynchronously fetch the profile 
 * matching the given username (via a Saga).
 * @param {string} username The username of the profile we want to get.
 * @returns {object} The created action.
 */
export function profileGet(username) {
	return {
		type: 'PROFILE_GET',
		username
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify the beginning of profile loading.
 * Dispatching this will mark the current profile as loading.
 * @returns {object} The created action.
 */
export function profileBegin() {
	return {
		type: 'PROFILE_REQ_BEGIN'
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to receive profile data.
 * Dispatching this will unmark the current profile as loading,
 * clear any errors, and store the profile data.
 * @param {object} profile The profile data to store.
 * @returns {object} The created action.
 */
export function profileReceived(profile) {
	return {
		type: 'PROFILE_REQ_RECEIVED',
		profile
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify something went wrong when fetching profile data. 
 * @param {any} error An error message specifying what went wrong.
 * @returns The created action.
 */
export function profileError(error) {
	return {
		type: 'PROFILE_REQ_ERROR',
		error
	}
}

/**
 * Action creator to initiate saga to retrieve user bits.
 * Dispatching this will begin asynchronously fetch bits
 * posted by the given username (via a Saga).
 * @param {string} username The username to get bits for.
 * @returns {object} The created action.
 */
export function userBitsGet(username) {
	return {
		type: 'USER_BITS_GET',
		username
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify the beginning of user bit loading.
 * Dispatching this will mark current bits as loading.
 * @returns {object} The created action.
 */
export function userBitsBegin() {
	return {
		type: 'USER_BITS_REQ_BEGIN'
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify a canceled request.
 * Dispatching this doesn't set an error state and only
 * marks the bits as not loading.
 * @returns {object} The created action.
 */
export function userBitsCancel() {
	return {
		type: 'USER_BITS_REQ_CANCEL'
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to receive bit data.
 * Dispatching this will unmark the current bits as loading,
 * clear any errors, and store the bit data.
 * @param {Array.<Object>} bits The bit data to store.
 * @param {string} username The poster of the given bits.
 * @param {number} curPage The current page of the given bits.
 * @param {number} totalPages The total number of pages of bits.
 * @returns {object} The created action.
 */
export function userBitsReceived(bits, username, curPage, totalPages) {
	return {
		type: 'USER_BITS_REQ_RECEIVED',
		bits,
		username,
		curPage,
		totalPages
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify something went wrong when fetching bit data. 
 * @param {any} error An error message specifying what went wrong.
 * @returns {object} The created action.
 */
export function userBitsError(error) {
	return {
		type: 'USER_BITS_REQ_ERROR',
		error
	}
}

/**
 * Action creator to initiate saga to retrieve bit replies.
 * Dispatching this will begin asynchronously fetch
 * details about a single bit (via a Saga).
 * @param {string} bitID The unique bit ID to get replies for.
 * @returns {object} The created action.
 */
export function bitRepliesGet(bitID) {
	return {
		type: 'BIT_REPLIES_GET',
		bitID
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify the beginning of bit reply loading.
 * Dispatching this will mark current replies as loading.
 * @returns {object} The created action.
 */
export function bitRepliesBegin() {
	return {
		type: 'BIT_REPLIES_REQ_BEGIN'
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to receive bit replies.
 * Dispatching this will unmark replies as loading,
 * clear any errors, and store parent/child bit data.
 * @param {object} parentBit The parent bit object.
 * @param {Array.<object>} children An array of reply bits to the parent bit.
 * @returns {object} The created action.
 */
export function bitRepliesReceived(parentBit, children) {
	return {
		type: 'BIT_REPLIES_REQ_RECEIVED',
		parentBit,
		children
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify something went wrong when fetching
 * bit reply data. 
 * @param {*} error An error message specifying what went wrong.
 * @returns {object} The created action.
 */
export function bitRepliesError(error) {
	return {
		type: 'BIT_REPLIES_REQ_ERROR',
		error
	}
}

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