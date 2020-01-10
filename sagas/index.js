import { all, call, put, select, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../api'

// selector to get pagination data from state
const pageSelector = state => state.bits.page

export function* getProfile(action) {
	const { username } = action
	try {
		yield put(actions.profileBegin())
		const profile = yield call(api.getUserInfo, username)
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
		const fullBitInfo = yield call(api.getBitInfo, bitID)
		const replies = fullBitInfo.replies
		const parentInfo = { ...fullBitInfo }
		delete parentInfo.replies
		yield put(actions.bitRepliesReceived(parentInfo, replies))
	} catch (error) {
		yield put(actions.bitRepliesError(error))
	}
}

export function* watchGetBitReplies() {
	yield takeEvery('BIT_REPLIES_GET', getBitReplies)
}

// root saga which will run in a separate thread
export default function* rootSaga() {
	// this function will execute these things concurrently
	yield all([
		watchGetProfile(),
		watchGetUserBits(),
		watchGetBitReplies(),
	])
}