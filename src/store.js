/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import testApp from './reducers';

// Add routing support, copy example @ https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
/**
 * history for routing
 */
export const history = createHistory();

const enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

// Initial state keys are critical to reducers when combined, the reducers tag in the combineReducers call
// must match with any initial state.
// Get the shape of the state correct
// Add follow to each item in the initial dataset so we can track this
let initialState = {
	bar: {
		itemList: [],
		sortMode: 0,
	},
	baz: {
		offset: 0,
		subset: []
	},
	foo: {
		item: {},
	}
};

export const configureStore = () => {
	let store = createStore(testApp, initialState, composedEnhancers);
	let state = store.getState();
	console.log(state);
	return store;
};

export default configureStore;