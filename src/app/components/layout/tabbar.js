import React from 'react';
import Tab from '../common/tab'

export default class TabBar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<section className="tabbar">
				{ 
					this.props.tabs.map((tab,i) => <Tab key={i} 
														tabName={tab.name} 
														className={"tab" + (i==this.props.activeTab?' activetab':'') }
														onClick={this.onTabClick.bind(this, i)} />
										) 
				}
			</section>
		);
	}

	onTabClick(i) {
		this.props.onTabChange(i);
	}

}