import fetch from 'isomorphic-unfetch'

const API_ROOT = process.env.API_ROOT
const CLIENT_NAME = process.env.CLIENT_NAME

export const getUserInfo = username => {
	const payload = {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username })
	}
	return fetch(`${API_ROOT}/user/info`, payload).then(res => {
		if (res.status != 200) {
			throw new Error(res.status)
		}
		return res
	}).then(res => res.json()).then(json => json.result)
}