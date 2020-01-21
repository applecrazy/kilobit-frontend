// profile actions

/**
 * Action creator to initiate profile-getting saga.
 * Dispatching this will begin asynchronously fetch the profile 
 * matching the given username (via a Saga).
 * @param {string} username The username of the profile we want to get.
 * @returns {object} The created action.
 */
export function profileGet(username) {
	return {
		type: 'PROFILE_GET',
		username,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify the beginning of profile loading.
 * Dispatching this will mark the current profile as loading.
 * @returns {object} The created action.
 */
export function profileBegin() {
	return {
		type: 'PROFILE_REQ_BEGIN',
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to receive profile data.
 * Dispatching this will unmark the current profile as loading,
 * clear any errors, and store the profile data.
 * @param {object} profile The profile data to store.
 * @returns {object} The created action.
 */
export function profileReceived(profile) {
	return {
		type: 'PROFILE_REQ_RECEIVED',
		profile,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify something went wrong when fetching profile data. 
 * @param {any} error An error message specifying what went wrong.
 * @returns The created action.
 */
export function profileError(error) {
	return {
		type: 'PROFILE_REQ_ERROR',
		error,
	}
}

/**
 * Action creator to initiate saga to retrieve user bits.
 * Dispatching this will begin asynchronously fetch bits
 * posted by the given username (via a Saga).
 * @param {string} username The username to get bits for.
 * @returns {object} The created action.
 */
export function userBitsGet(username) {
	return {
		type: 'USER_BITS_GET',
		username,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify the beginning of user bit loading.
 * Dispatching this will mark current bits as loading.
 * @returns {object} The created action.
 */
export function userBitsBegin() {
	return {
		type: 'USER_BITS_REQ_BEGIN',
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify a canceled request.
 * Dispatching this doesn't set an error state and only
 * marks the bits as not loading.
 * @returns {object} The created action.
 */
export function userBitsCancel() {
	return {
		type: 'USER_BITS_REQ_CANCEL',
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to receive bit data.
 * Dispatching this will unmark the current bits as loading,
 * clear any errors, and store the bit data.
 * @param {Array.<Object>} bits The bit data to store.
 * @param {string} username The poster of the given bits.
 * @param {number} curPage The current page of the given bits.
 * @param {number} totalPages The total number of pages of bits.
 * @param {number} totalBits The total number of bits.
 * @returns {object} The created action.
 */
export function userBitsReceived(bits, username, curPage, totalPages, totalBits) {
	return {
		type: 'USER_BITS_REQ_RECEIVED',
		bits,
		username,
		curPage,
		totalPages,
		totalBits,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify something went wrong when fetching bit data. 
 * @param {any} error An error message specifying what went wrong.
 * @returns {object} The created action.
 */
export function userBitsError(error) {
	return {
		type: 'USER_BITS_REQ_ERROR',
		error,
	}
}

/**
 * Action creator to initiate saga to retrieve bit replies.
 * Dispatching this will begin asynchronously fetch
 * details about a single bit (via a Saga).
 * @param {string} bitID The unique bit ID to get replies for.
 * @returns {object} The created action.
 */
export function bitRepliesGet(bitID) {
	return {
		type: 'BIT_REPLIES_GET',
		bitID,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify the beginning of bit reply loading.
 * Dispatching this will mark current replies as loading.
 * @returns {object} The created action.
 */
export function bitRepliesBegin() {
	return {
		type: 'BIT_REPLIES_REQ_BEGIN',
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to receive bit replies.
 * Dispatching this will unmark replies as loading,
 * clear any errors, and store parent/child bit data.
 * @param {object} parentBit The parent bit object.
 * @param {Array.<object>} children An array of reply bits to the parent bit.
 * @returns {object} The created action.
 */
export function bitRepliesReceived(parentBit, children) {
	return {
		type: 'BIT_REPLIES_REQ_RECEIVED',
		parentBit,
		children,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify something went wrong when fetching
 * bit reply data. 
 * @param {*} error An error message specifying what went wrong.
 * @returns {object} The created action.
 */
export function bitRepliesError(error) {
	return {
		type: 'BIT_REPLIES_REQ_ERROR',
		error,
	}
}

// TODO: add comments before each type of action: Bit Replies, etc.
// TODO: change @returns from The created action to A ready-to-dispatch action object.

// login actions

/**
 * Action creator to initiate saga to retrieve auth token.
 * Dispatching this will begin asynchronously fetch
 * a JWT auth token from the API (via a Saga).
 * @param {string} username The user's username.
 * @param {string} password The user's password.
 * @returns {object} The created action.
 */
export function authTokenGet(username, password) {
	return {
		type: 'AUTH_TOKEN_GET',
		username,
		password,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify the beginning of auth token loading.
 * Dispatching this will mark auth as loading.
 * @returns {object} The created action.
 */
export function authTokenBegin() {
	return {
		type: 'AUTH_TOKEN_REQ_BEGIN',
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to receive auth token.
 * Dispatching this will unmark auth as loading,
 * clear any errors, mark the user as authenticated,
 * and store profile info + a JSON web token.
 * @param {object} userInfo Profile information about the user.
 * @param {string} token A JWT generated by the API.
 * @returns {object} The created action.
 */
export function authTokenReceived(userInfo, token) {
	return {
		type: 'AUTH_TOKEN_REQ_RECEIVED',
		userInfo,
		token,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify something went wrong when fetching
 * an auth token.
 * @param {*} error An error message specifying what went wrong.
 * @returns {object} The created action.
 */
export function authTokenError(error) {
	return {
		type: 'AUTH_TOKEN_REQ_ERROR',
		error,
	}
}
