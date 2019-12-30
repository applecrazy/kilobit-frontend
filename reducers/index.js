import { REQUEST_USER_INFO, RECEIVE_USER_INFO } from '../actions'
const initialState = {
	error: null, // string error?
	status: null, // status code
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
		case REQUEST_USER_INFO:
			return { ...state, loadingUserInfo: true }
		case RECEIVE_USER_INFO:
			return { ...state, curUserInfo: action.info, loadingUserInfo: false }
		default:
			return state
	}
}

export default kilobitApp