/**
 * Created by Kelvin Ishigo on 2/4/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * The arg to the Presentational component can be either props (by name) and
 * then assume the fields are as mapStateToProps and mapDispatchToProps specify
 *
 * @param props
 * @returns {*}
 * @constructor
 */
// const TestConnect = ({onTest, onTestState}) => {
const TestConnect = (props) => {
	let onClick = (e) => {
		props.onTest();
	};
	let onTestIt = (e) => {
		props.onTestState();
	};
	return (
		<div>
			<button onClick={onClick}>Test</button>
			<button onClick={onTestIt}>Run Internal Tests</button>
		</div>
	)
};

TestConnect.propTypes = {
	// TBD add more depth to type as it evolves
};

export default TestConnect