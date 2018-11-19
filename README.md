# 3dprinter

The project aims to create blockchain-based front ends to facilitate some services for the 3dprinter.

# Setup

## Build
Take an update of the repository and run command *npm install*. 
In the console, run command *npm start*. 
This should perform the transpiling and stage the project in dist folder.  
Open in browser http://localhost:8080. 


## Dependencies
1. npm and nodejs LTS 10.13.0. 
2. react and react-dom node modules. 
3. React Developer Tools browser extension. 
4. babel and webpack. 


# Blockchain Setup
Ethereum blockchain platform will be setup in a local environment (private) and the blockchain would use POA as consensus engine. It is planned that all stakeholders of the 3dprinter projects be the sealers for the blockchain network.

# Dapp
The decentralized application that will be hosted in the private chain will be developed in Solidity.
All application features will be provided by the dapp which will be exposed via RPC interface for the front ends.

# Features
Phase 1:
1. User registration to become a stakeholder
2. Store all purchases of 3dprinter components as transactions in blockchain
3. Funds status. Reflect the total funds raised, leftover, and amount utilized
4. Admin only role for critical features of the application

Phase 2:
1. Print Scheduling: Printing as a service from the front end
2. Print Management: Set a cap on how much a stakeholder can print based on polymer usage (may be in grams)
3. Web-enabled print (upload 3dmodel file from front end and trigger print).

