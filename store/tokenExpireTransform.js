/* eslint-disable no-unused-vars */
import { createTransform } from 'redux-persist'
import jwtDecode from 'jwt-decode'
import { initialState } from '../reducers'

const TokenExpireTransform = createTransform(
	(inboundState, key) => { return { ...inboundState } },
	// check if the token is invalid, let's return the default values if so
	(outboundState, key) => {
		const { token } = outboundState
		const currentTime = Math.floor(Date.now() / 1000)
		if (token && jwtDecode(token).exp > currentTime) {
			return outboundState
		}
		return initialState.auth
	},
	// only runs on the auth reducer
	{ whitelist: ['auth'] },
)

export default TokenExpireTransform