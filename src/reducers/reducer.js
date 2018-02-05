/**
 * Created by Kelvin Ishigo on 2/4/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {TestActions} from "../actions/TestActions";

const bar = (state = {itemList: [], softMode: 0}, action) => {
	switch (action.type) {
		case TestActions.BAR_Test:
			return {...state, softMode: 1};
		default:
			return state;
	}
};

export default bar;