import fetch from 'isomorphic-unfetch'
import jwtDecode from 'jwt-decode'

const API_ROOT = process.env.API_ROOT
const CLIENT_NAME = process.env.CLIENT_NAME

/**
 * Get information about a user.
 * @param {string} username The username of the user to look up.
 * @returns A promise that resolves to an object, or rejects with status code.
 */
export const getUserInfo = username => {
	const payload = {
		method: 'GET',
		cache: 'no-cache',
	}
	return fetch(`${API_ROOT}/user/${username}`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null } })
}

/**
 * Get a user's bits.
 * @param {string} username The username of the user to look up.
 * @param {number} page The current page we want to get of a user's bits. If in doubt, choose 1.
 * @returns A promise that resolves to an object of the form {status: ..., result: ...}
 */
export const getUserBits = (username, page) => {
	const payload = {
		method: 'GET',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
	}
	return fetch(`${API_ROOT}/user/${username}/bits?page=${page}`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null } })
}

/**
 * Get information about a bit by ID.
 * @param {string} bitID The ID of the bit to look up.
 * @returns A promise that resolves to an object, or rejects with status code.
 */
export const getBitInfo = bitID => {
	const payload = {
		method: 'GET',
		cache: 'no-cache',
	}
	return fetch(`${API_ROOT}/bit/${bitID}`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null } })
}

/**
 * Log in using the given username and password. Provides a JWT to make requests as the 
 * logged-in user.
 * @param {string} username The username.
 * @param {string} password The password of the user.
 */
export const login = (username, password) => {
	const body = {
		username,
		password,
		client: CLIENT_NAME,
	}
	const payload = {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	}
	return fetch(`${API_ROOT}/token`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null, token: null } })
}


/**
 * Sign up a user using the provided credentials. 
 * @param {string} displayName The user's display name.
 * @param {string} username The user's username.
 * @param {string} password The user's password.
 * @param {string} utcOffset The user's offset from UTC.
 */
export const signup = (displayName, username, password, utcOffset) => {
	const body = {
		username,
		password,
		displayName,
		utcOffset,
	}
	const payload = {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	}
	return fetch(`${API_ROOT}/user`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null } })
}

export const createBit = (text, token) => {
	const username = jwtDecode(token).username
	if (!username) {
		return new Promise(
			// eslint-disable-next-line no-unused-vars
			(resolve, reject) => {
				resolve({ status: 401, result: null })
			})
	}
	const body = { text }
	const payload = {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
		},
		body: JSON.stringify(body),
	}
	return fetch(`${API_ROOT}/user/${username}/bits`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null } })

}

export const getFeed = token => {
	const username = jwtDecode(token).username
	if (!username) {
		return new Promise(
			// eslint-disable-next-line no-unused-vars
			(resolve, reject) => {
				resolve({ status: 401, result: null })
			})
	}
	const payload = {
		method: 'GET',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
		},
	}
	return fetch(`${API_ROOT}/user/${username}/feed`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null } })

}