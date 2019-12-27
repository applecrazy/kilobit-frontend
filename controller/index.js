import fetch from 'isomorphic-unfetch'
var controller = {}

const { API_ROOT } = process.env

controller.getUserInfo = async username => {
	const payload = {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username })
	}
	const { status, result: userInfo } = await (await fetch(`${API_ROOT}/user/info`, payload)).json()
	return { username, status, userInfo }
}

controller.loadUserBits = async (username, page) => {
	const payload = {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ page })
	}
	const response = await (await fetch(`${API_ROOT}/bit/u/${username}`, payload)).json()
	return response
}

controller.getBitInfo = async bitID => {
	const payload = {
		method: 'GET',
		cache: 'no-cache'
	}
	const { status, result: bitInfo } = await (await fetch(`${API_ROOT}/bit/${bitID}`, payload)).json()
	return {status, bitInfo}
}

export default controller