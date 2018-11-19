# 3dprinter

The project aims to create blockchain-based front ends to facilitate some services for the 3dprinter.

# Dependencies

a. npm and nodejs LTS 10.13.0
b. react and react-dom node modules
c. babel and webpack

## Build
In the console, run the command: npm start
This should perform the transpiling and stage the project in dist folder.
Open in browser http://localhost:8080

# Blockchain Setup
Ethereum blockchain platform will be setup in a local environment (private) and the blockchain would use POA as consensus engine. It is planned that all stakeholders of the 3dprinter projects be the sealers for the blockchain network.

# Dapp
The decentralized application that will be hosted in the private chain will be developed in Solidity.
All application features will be provided by the dapp which will be exposed via RPC interface for the front ends.

# Features
Phase 1:
a. User registration to become a stakeholder
b. Store all purchases of 3dprinter components as transactions in blockchain
c. Funds status. Reflect the total funds raised, leftover, and amount utilized
d. Admin only role for critical features of the application

Phase 2:
a. Print Scheduling: Printing as a service from the front end
b. Print Management: Set a cap on how much a stakeholder can print based on polymer usage (may be in grams)
c. Web-enabled print (upload 3dmodel file from front end and trigger print).

