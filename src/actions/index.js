/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {TestActions} from "./TestActions";

/**
 * Searches for a movie and returns the json, POJO of the movie
 * @param movieName
 * @returns {{type: string, movieName: *}}
 */
export const testBar = () => {
	return {
		type: TestActions.BAR_Test,
	}
};

export const testFoo = () => {
	return {
		type: TestActions.FOO_Test,
	}
};


