'use strict'

import React from 'react';
import Members from '../view/members';
import FundStatus from '../view/fundstatus';
import Validators from '../view/validators';

export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		var view;
		if(this.props.activeTab == 0) {
			view = <Members />
		} else if(this.props.activeTab == 1) {
			view = <Validators />
		} else if(this.props.activeTab == 2) {
			view = <FundStatus />
		}

		return(
			<section>
				{view}
				<i className="centercontent">Coming Soon</i>
			</section>
		);
	}
}