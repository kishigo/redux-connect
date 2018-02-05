/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { Route, Link } from 'react-router-dom'
import TestConnectContainer from "../containers/TestConnectContainer";

const TestLauncher = () => {
	let navTextStyle = {
		color: "gray"
	};
	return (
		<div>
			<header>
				NAV-->
				<Link style={navTextStyle} to="/">TestConnect</Link>
			</header>
			<main>
				<Route exact path="/" component={TestConnectContainer}/>
			</main>

		</div>

)
};

export default TestLauncher;

