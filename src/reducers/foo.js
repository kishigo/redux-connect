/**
 * Created by Kelvin Ishigo on 2/4/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {TestActions} from "../actions/TestActions";

const foo = (state = {}, action) => {
	console.log('foo.reduce: action.type: ' + action.type);
	switch (action.type) {
		case TestActions.FOO_Test:
			return state;
		default:
			return state;
	}
};

export default foo;