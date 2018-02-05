/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import bar from "./reducer";
import {baz} from "./bazfoo"
import foo from "./foo"

// Relationship is the key tag must have a matching tag in the initialState of the createStore() call or the
// container's mapStateToProps will not have partitioned data and will have to parse state
const testApp = combineReducers({
	// Add custom reducers here
	bar: bar,
	baz: baz,
	foo: foo,
	routing: routerReducer
});

export default testApp;
