import fetch from 'isomorphic-unfetch'

const API_ROOT = process.env.API_ROOT
const CLIENT_NAME = process.env.CLIENT_NAME

/**
 * Get information about a user.
 * @param {string} username The username of the user to look up.
 * @returns A promise that resolves to an object, or rejects with status code.
 */
export const getUserInfo = username => {
	const payload = {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username }),
	}
	return fetch(`${API_ROOT}/user/info`, payload)
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
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ page }),
	}
	return fetch(`${API_ROOT}/bit/u/${username}`, payload)
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
	return fetch(`${API_ROOT}/login`, payload)
		.then(res => res.json())
		.catch(err => { return { status: err.message, result: null, token: null } })
}