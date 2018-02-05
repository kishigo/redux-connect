/**
 * Created by Kelvin Ishigo on 2/4/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {TestActions} from "../actions/TestActions";

export const baz = (state = {offset: 0, subset: []}, action) => {
	switch (action.type) {
		case TestActions.BAZ_Test:
			return state;
		default:
			return state;
	}
};

