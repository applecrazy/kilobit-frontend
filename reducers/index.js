import { REQUEST_USER_INFO, RECEIVE_USER_INFO, PROCESS_ERROR, REJECT_USER_INFO, CLEAR_ERROR } from '../actions'
const initialState = {
	error: null, // string error?
	status: 200, // status code
	loadingAuth: false,
	loggedInUser: null, // logged in user info
	isLoggedIn: false, // boolean
	authToken: null, // auth token, string
	loadingBits: false,
	bits: [], // bit array
	bitType: 'USER_BITS', // type of bits that are stored
	curUserInfo: null, // object
	loadingUserInfo: false
}

function kilobitApp(state = initialState, action) {
	switch (action.type) {
		case PROCESS_ERROR:
			return { ...state, status: action.status, error: action.error }
		case CLEAR_ERROR:
			return { ...state, status: initialState.status, error: null }
		case REQUEST_USER_INFO:
			return { ...state, loadingUserInfo: true }
		case REJECT_USER_INFO:
			return { ...state, loadingUserInfo: false }
		case RECEIVE_USER_INFO:
			return { ...state, curUserInfo: action.info, loadingUserInfo: false, status: 200, error: null }
		default:
			return state
	}
}

export default kilobitApp