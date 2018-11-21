import React from 'react';

export default class Tab extends React.Component {
	render() {
		return(
			<div className={this.props.className}
				 onClick={this.props.onClick}>
				{this.props.tabName}
			</div>
		);
	}
}