import { all, call, put, takeEvery } from 'redux-saga/effects'
import { profileBegin, profileReceived, profileError } from '../actions'
import { getUserInfo } from '../api'

export function* getProfile(action) {
	const { username } = action
	try {
		yield put(profileBegin())
		const profile = yield call(getUserInfo, username)
		yield put(profileReceived(profile))
	} catch (error) {
		yield put(profileError(error))
	}
}

export function* watchGetProfile() {
	yield takeEvery('PROFILE_GET', getProfile)
}

// root saga which will run in a separate thread
export default function* rootSaga() {
	// this function will execute these things concurrently
	yield all([
		watchGetProfile()
	])
}