/**
 * Created by Kelvin Ishigo on 2/4/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import TestConnect from "../components/TestConnect";
import {testBar, testFoo} from "../actions";

/**
 * Always gets whole state: It seems so in vanilla redux:
 * https://stackoverflow.com/questions/39757604/react-redux-can-i-make-mapstatetoprops-only-take-in-part-of-the-state
 * @param state
 * @returns {{bar: *|{itemList: Array, sortMode: number}|initialState.bar|{itemList, sortMode}|(function(*=, *)), baz: *|{offset: number, subset: Array}|initialState.baz|{offset, subset}}}
 */
const mapStateToProps = state => {
	return {
		bar: state.bar,
		baz: state.baz,
	};
};
/**
 * Need bindActionCreators to connect action to reducer
 * @param dispatch
 * @returns {{onTest: function(): *, onTestState: function()}|ActionCreator<any>|ActionCreatorsMapObject}
 */
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		onTest: () => dispatch(testBar),
		onTestState: () => {
			console.log('onTestState');
			dispatch(testFoo)
		}
	}, dispatch);
};

const TestConnectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TestConnect);

export default TestConnectContainer;