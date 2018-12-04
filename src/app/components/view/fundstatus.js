import React from 'react';
import Web3 from 'web3';


export default class FundStatus extends React.Component {
	
	constructor(props) {
		super(props);
		var web3;
		if (typeof web3 !== 'undefined') {
  			web3 = new Web3(web3.currentProvider);
		} else {
  			// Set the provider you want from Web3.providers
  			web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.1.7:8502"));
  			console.log(web3);
		}

		this.state = {webb3: web3};
	}

	render() {
		//console.log("isConnected: ", this.state.webb3.isConnected());
		//if(this.state.webb3.net.listening) {
        //	console.log(this.state.webb3.net.peerCount);
      	//}
      	console.log(this.state.webb3.currentProvider);
		this.checkBalance();
		return(
			<h1 className="bigtext">Fund Status</h1>
		);
	}

	async checkBalance() {
		console.log('checking balance');
		let c = await this.state.webb3.eth.getBalance("0x898157bbd1c7fb2e4dc48a123f68db38ffd75095");
		console.log(c);
	}
}