import { combineReducers } from 'redux'

/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */

export const initialState = {
	auth: {
		loading: false,
		isAuth: false,
		token: null,
		user: null,
		error: null,
	},
	bits: {
		loading: false,
		error: null,
		type: 'USER', // types will include: 'USER', 'TAG' (for bittag lists)
		page: {
			current: 0,
			total: 1,
		},
		username: null,
		current: [],
		total: 0,
	},
	replies: {
		loading: false,
		parentBit: null,
		children: [],
		error: null,
	},
	profile: {
		current: null,
		loading: false,
		error: null,
	},
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
	return {
		...profileState,
		loading: true,
	}
}

function profileReceived(profileState, action) {
	return {
		...profileState,
		loading: false,
		error: null,
		current: action.profile,
	}
}

function profileError(profileState, action) {
	return {
		...profileState,
		loading: false,
		error: action.error,
		current: null,
	}
}

const profileReducer = createReducer(initialState.profile, {
	'PROFILE_REQ_BEGIN': profileBegin,
	'PROFILE_REQ_RECEIVED': profileReceived,
	'PROFILE_REQ_ERROR': profileError,
})


function userBitsBegin(bitsState, action) {
	return {
		...bitsState,
		loading: true,
	}
}

function userBitsCancel(bitsState, action) {
	return {
		...bitsState,
		loading: false,
	}
}

function userBitsReceived(bitsState, action) {
	var initialBits = bitsState.current
	if (action.username !== bitsState.username) {
		initialBits = []
	}
	return {
		...bitsState,
		loading: false,
		error: null,
		type: 'USER',
		username: action.username,
		current: initialBits.concat(action.bits),
		page: {
			current: action.curPage,
			total: action.totalPages,
		},
		total: action.totalBits,
	}
}

function userBitsError(bitsState, action) {
	return {
		...(initialState.bits),
		error: action.error,
	}
}

const bitsReducer = createReducer(initialState.bits, {
	'USER_BITS_REQ_BEGIN': userBitsBegin,
	'USER_BITS_REQ_RECEIVED': userBitsReceived,
	'USER_BITS_REQ_CANCEL': userBitsCancel,
	'USER_BITS_REQ_ERROR': userBitsError,
})

function bitRepliesBegin(repliesState, action) {
	return {
		...repliesState,
		loading: true,
	}
}

function bitRepliesReceived(repliesState, action) {
	return {
		...repliesState,
		parentBit: action.parentBit,
		children: action.children,
		error: null,
		loading: false,
	}
}

function bitRepliesError(repliesState, action) {
	return {
		...repliesState,
		error: action.error,
		loading: false,
	}
}

const repliesReducer = createReducer(initialState.replies, {
	'BIT_REPLIES_REQ_BEGIN': bitRepliesBegin,
	'BIT_REPLIES_REQ_RECEIVED': bitRepliesReceived,
	'BIT_REPLIES_REQ_ERROR': bitRepliesError,
})

function authTokenBegin(authState, action) {
	return {
		...authState,
		loading: true,
	}
}

function authTokenReceived(authState, action) {
	return {
		...authState,
		loading: false,
		error: null,
		isAuth: true,
		token: action.token,
		user: action.userInfo,
	}
}

function authTokenError(authState, action) {
	return {
		...authState,
		error: action.error,
		loading: false,
	}
}

function authTokenClear(authState, action) {
	return initialState.auth
}

const authReducer = createReducer(initialState.auth, {
	'AUTH_TOKEN_REQ_BEGIN': authTokenBegin,
	'AUTH_TOKEN_REQ_RECEIVED': authTokenReceived,
	'AUTH_TOKEN_REQ_ERROR': authTokenError,
	'AUTH_TOKEN_CLEAR': authTokenClear,
})

const kilobitApp = combineReducers({
	auth: authReducer,
	bits: bitsReducer,
	profile: profileReducer,
	replies: repliesReducer,
})

export default kilobitApp