import { REQUEST_USER_INFO, RECEIVE_USER_INFO, PROCESS_ERROR, REJECT_USER_INFO, CLEAR_ERROR, REQUEST_USER_BITS, REJECT_USER_BITS, RECEIVE_USER_BITS, REQUEST_BIT_INFO, REJECT_BIT_INFO, RECEIVE_BIT_INFO, REQUEST_LOGIN_TOKEN, REJECT_LOGIN_TOKEN, RECEIVE_LOGIN_TOKEN } from '../actions'
// TODO: validate stored token, if invalid throw it away
const initialToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null
const initialState = {
	error: null, // string error?
	status: 200, // status code
	loadingAuth: false,
	loggedInUser: null, // logged in user info
	isLoggedIn: initialToken !== null, // boolean
	authToken: initialToken, // auth token, string
	loadingBits: false,
	bits: [], // bit array
	curBitPage: 0,
	totalBitPages: 1,
	bitType: 'USER_BITS', // type of bits that are stored
	curUserInfo: null, // object
	loadingUserInfo: false,
	loadingBitInfo: false,
	curBitInfo: null
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
		case REQUEST_USER_BITS:
			return { ...state, loadingBits: true }
		case REJECT_USER_BITS:
			return { ...state, loadingBits: false }
		case RECEIVE_USER_BITS: {
			const { bits, curBitPage, totalBitPages } = action
			return { ...state, bitType: 'USER_BITS', loadingBits: false, status: 200, error: null, bits: state.bits.concat(bits), curBitPage, totalBitPages }
		}
		case REQUEST_BIT_INFO:
			return { ...state, loadingBitInfo: true }
		case REJECT_BIT_INFO:
			return { ...state, loadingBitInfo: false }
		case RECEIVE_BIT_INFO:
			return { ...state, loadingBitInfo: false, status: 200, error: null, curBitInfo: action.info }
		case REQUEST_LOGIN_TOKEN:
			return { ...state, loadingAuth: true }
		case REJECT_LOGIN_TOKEN:
			return { ...state, loadingAuth: false }
		case RECEIVE_LOGIN_TOKEN:
			return { ...state, loadingAuth: false, isLoggedIn: true, status: 200, error: null, authToken: action.token }
		default:
			return state
	}
}

export default kilobitApp