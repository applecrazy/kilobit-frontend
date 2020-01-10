import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

import rootReducer from '../reducers'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const makeStore = (preloadedState, { isServer, req = null }) => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(
				sagaMiddleware,
			),
		),
	)

	// next-redux-saga stuff
	if (req || !isServer) {
		store.sagaTask = sagaMiddleware.run(rootSaga)
	}
	
	return store
}


export default makeStore