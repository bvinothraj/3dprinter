'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Content from './components/content';

export default class App extends React.Component {
	render() {
		return(
			<div>
				<Header/>
				<Content/>
			</div>
		);
	}
}


ReactDOM.render(<App/>, document.getElementById('app'));