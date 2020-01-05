import { combineReducers } from 'redux'

/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */

// TODO: validate stored token, if invalid throw it away
const initialToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null
// const initialState = {
// 	error: null, // string error?
// 	status: 200, // status code
// 	loadingAuth: false,
// 	isLoggedIn: initialToken !== null, // boolean
// 	loggedInUser: null, // logged in user info
// 	authToken: initialToken, // auth token, string

// 	loadingBits: false,
// 	bits: [], // bit array
// 	curBitPage: 0,
// 	totalBitPages: 1,
// 	bitType: 'USER_BITS', // type of bits that are stored
// 	curUserInfo: null, // object
// 	loadingUserInfo: false,
// 	loadingBitInfo: false,
// 	curBitInfo: null
// }

const initialState = {
	error: null,
	status: 200,
	auth: {
		loading: false,
		isAuth: initialToken !== null,
		token: initialToken,
		user: null
	},
	bits: {
		loading: false,
		type: 'USER',
		page: {
			current: 0,
			total: 1
		},
		current: []
	},
	profile: {
		current: null,
		loading: false,
		error: null
	}
}

function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action)
		} else {
			return state
		}
	}
}

function profileBegin(profileState, action) {
	return { ...profileState, loading: true }
}

function profileReceived(profileState, action) {
	return {
		...profileState,
		loading: false,
		error: null,
		current: action.profile
	}
}

function profileError(profileState, action) {
	return {
		...profileState,
		loading: false,
		error: action.error,
		current: null
	}
}

const profileReducer = createReducer(initialState.profile, {
	'PROFILE_REQ_BEGIN': profileBegin,
	'PROFILE_REQ_RECEIVED': profileReceived,
	'PROFILE_REQ_ERROR': profileError
})

const kilobitApp = combineReducers({
	profile: profileReducer
})

// const profileReducer = createReducer(newInitialState.profile, {
// 	REQUEST_USER_INFO: requestUserInfo,
// 	REJECT_USER_INFO: rejectUserInfo,
// 	RECEIVE_USER_INFO: receiveUserInfo,
// })

// function requestUserInfo(state, action) {
// 	return { ...state, loading: true }
// }

// function rejectUserInfo(state, action) {
// 	return { ...state, loading: false }
// }

// function receiveUserInfo(state, action) {
// 	return { ...state, curUserInfo: action.info, loadingUserInfo: false, status: 200, error: null }
// }

// function processError(state, action) {
// 	return { ...state, status: action.status, error: action.error }
// }

// function clearError(state, action) {
// 	return { ...state, status: initialState.status, error: null }
// }

// function requestUserBits(state, action) {
// 	return { ...state, loadingBits: true }
// }

// function rejectUserBits(state, action) {
// 	return { ...state, loadingBits: false }
// }

// function receiveUserBits(state, action) {
// 	const { bits, curBitPage, totalBitPages } = action
// 	return { ...state, bitType: 'USER_BITS', loadingBits: false, status: 200, error: null, bits: state.bits.concat(bits), curBitPage, totalBitPages }
// }

// function requestBitInfo(state, action) {
// 	return { ...state, loadingBitInfo: true }
// }

// function rejectBitInfo(state, action) {
// 	return { ...state, loadingBitInfo: false }
// }

// function receiveBitInfo(state, action) {
// 	return { ...state, loadingBitInfo: false, status: 200, error: null, curBitInfo: action.info }
// }

// function requestLoginToken(state, action) {
// 	return { ...state, loadingAuth: true }
// }

// function rejectLoginToken(state, action) {
// 	return { ...state, loadingAuth: false }
// }

// function receiveLoginToken(state, action) {
// 	return { ...state, loadingAuth: false, isLoggedIn: true, status: 200, error: null, authToken: action.token }
// }

// function kilobitApp(state = initialState, action) {
// 	switch (action.type) {
// 		case PROCESS_ERROR:
// 			return processError(state, action)
// 		case CLEAR_ERROR:
// 			return clearError(state, action)
// 		case REQUEST_USER_INFO:
// 			return requestUserInfo(state, action)
// 		case REJECT_USER_INFO:
// 			return rejectUserInfo(state, action)
// 		case RECEIVE_USER_INFO:
// 			return receiveUserInfo(state, action)
// 		case REQUEST_USER_BITS:
// 			return requestUserBits(state, action)
// 		case REJECT_USER_BITS:
// 			return rejectUserBits(state, action)
// 		case RECEIVE_USER_BITS:
// 			return receiveUserBits(state, action)
// 		case REQUEST_BIT_INFO:
// 			return requestBitInfo(state, action)
// 		case REJECT_BIT_INFO:
// 			return rejectBitInfo(state, action)
// 		case RECEIVE_BIT_INFO:
// 			return receiveBitInfo(state, action)
// 		case REQUEST_LOGIN_TOKEN:
// 			return requestLoginToken(state, action)
// 		case REJECT_LOGIN_TOKEN:
// 			return rejectLoginToken(state, action)
// 		case RECEIVE_LOGIN_TOKEN:
// 			return receiveLoginToken(state, action)
// 		default:
// 			return state
// 	}
// }

export default kilobitApp