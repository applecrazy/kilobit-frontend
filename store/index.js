import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware, // lets us dispatch() functions
		)
	)
)

store.subscribe(() => {
	const token = store.getState().authToken
	if (token) {
		localStorage.setItem('token', store.getState().authToken)
	}
})

export default store