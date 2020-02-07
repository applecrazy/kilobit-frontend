import { all, call, put, select, take, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../api'

// selector to get pagination data from state
const authSelector = state => state.auth.isAUth
const pageSelector = state => state.bits.page
const tokenSelector = state => state.auth.token

// utility function from https://goshakkk.name/detect-state-change-redux-saga/
function* waitFor(selector) {
	if (yield select(selector)) return
	while (true) {
		yield take('*') 
		if (yield select(selector)) return
	}
}

export function* getProfile(action) {
	const { username } = action
	try {
		yield put(actions.profileBegin())
		const profileData = yield call(api.getUserInfo, username)
		if (profileData.status !== 200) {
			yield put(actions.profileError(profileData.status))
			return
		}
		const { result: profile } = profileData
		yield put(actions.profileReceived(profile))
	} catch (error) {
		yield put(actions.profileError(error))
	}
}

export function* watchGetProfile() {
	yield takeEvery('PROFILE_GET', getProfile)
}

export function* getUserBits(action) {
	const { username } = action
	try {
		yield put(actions.userBitsBegin())
		const page = yield select(pageSelector)
		const nextPage = page.current + 1
		if (nextPage > page.total) {
			yield put(actions.userBitsCancel())
			return
		}
		const bitData = yield call(api.getUserBits, username, nextPage)
		if (bitData.status !== 200) {
			yield put(actions.userBitsError(bitData.status))
			return
		}
		const { result } = bitData
		yield put(actions.userBitsReceived(result.docs, result.username, result.page, result.totalPages, result.totalDocs))
	} catch (error) {
		yield put(actions.userBitsError(error))
	}
}

export function* watchGetUserBits() {
	yield takeEvery('USER_BITS_GET', getUserBits)
}

export function* getBitReplies(action) {
	const { bitID } = action
	try {
		yield put(actions.bitRepliesBegin())
		const { result: bitInfo, status } = yield call(api.getBitInfo, bitID)
		if (status !== 200) {
			yield put(actions.bitRepliesError(status))
			return
		}
		const replies = bitInfo.replies || []
		const parentInfo = { ...bitInfo }
		delete parentInfo.replies
		yield put(actions.bitRepliesReceived(parentInfo, replies))
	} catch (error) {
		yield put(actions.bitRepliesError(error))
	}
}

export function* watchGetBitReplies() {
	yield takeEvery('BIT_REPLIES_GET', getBitReplies)
}

export function* getAuthToken(action) {
	const { username, password } = action
	try {
		yield put(actions.authTokenBegin())
		const { token, status, result: profile } = yield call(api.login, username, password)
		if (status !== 200) {
			yield put(actions.authTokenError(status))
			return
		}
		yield put(actions.authTokenReceived(profile, token))
	} catch (error) {
		yield put(actions.bitRepliesError(error))
	}
}

export function* watchGetAuthToken() {
	yield takeEvery('AUTH_TOKEN_GET', getAuthToken)
}

export function* signUpUser(action) {
	const { displayName, username, password, utcOffset } = action
	try {
		yield put(actions.userCreateBegin())
		const { status, result } = yield call(api.signup, displayName, username, password, utcOffset)
		if (status !== 201) {
			yield put(actions.userCreateError(status))
			return
		}
		yield put(actions.userCreateReceived())
	} catch (error) {
		yield put(actions.userCreateError(error))
	}
}

export function* watchUserCreate() {
	yield takeEvery('USER_CREATE', signUpUser)
}

export function* bitCreate(action) {
	const { text } = action
	try {
		yield put(actions.bitCreateBegin())
		const token = yield select(tokenSelector)
		if (token === null) throw new Error(401)
		const { status, result } = yield call(api.createBit, text, token)
		if (status !== 201) {
			yield put(actions.bitCreateError(status))
			return
		}
		yield put(actions.bitCreateReceived(result))
	} catch (error) {
		yield put(actions.bitCreateError(error))
	}
}

export function* watchBitCreate() {
	yield takeEvery('BIT_CREATE', bitCreate)
}

export function* feedGet(action) {
	try {
		yield put(actions.feedGetBegin())
		// yield call(waitFor, state => authSelector(state) === true)
		const token = yield select(tokenSelector)
		if (token === null) throw new Error(401)
		const { status, result } = yield call(api.getFeed, token)
		if (status !== 200) {
			yield put(actions.feedGetError(status))
			return
		}
		yield put(actions.feedGetReceived(result))
	} catch (error) {
		yield put(actions.feedGetError(error))
	}
}

export function* watchFeedGet() {
	yield takeEvery('FEED_GET', feedGet)
}

// root saga which will run in a separate thread
export default function* rootSaga() {
	// this function will execute these things concurrently
	yield all([
		watchGetProfile(),
		watchGetUserBits(),
		watchGetBitReplies(),
		watchGetAuthToken(),
		watchUserCreate(),
		watchBitCreate(),
		watchFeedGet(),
	])
}