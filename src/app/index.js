'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/layout/header';
import TabBar from './components/layout/tabbar';
import Content from './components/layout/content';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tabs : [ { name:"Members"},
								{ name:"Validators"},
								{ name:"Fund Status"} 
							],
						activeTab : 0,
					};
	}

	render() {
		return(
			<div>
				<Header/>
				<TabBar tabs={this.state.tabs}
						activeTab={this.state.activeTab} 
						onTabChange={this.drawContent.bind(this)}/>
				<Content activeTab={this.state.activeTab}/>
			</div>
		);
	}

	drawContent(tabIndex) {
		this.setState((state) =>({activeTab:tabIndex}));
	}
}


ReactDOM.render(<App/>, document.getElementById('app'));