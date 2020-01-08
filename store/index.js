import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

import rootReducer from '../reducers'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(
				sagaMiddleware, // lets us dispatch() functions
			),
		),
	)
	sagaMiddleware.run(rootSaga)
	return store
}


export default makeStore