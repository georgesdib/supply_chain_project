# UML Diagrams
Please find these under the folder UML

# Libraries in use
* "lite-server": "^2.6.1"
* "copy-webpack-plugin": "^5.0.5"
* "webpack": "^4.41.2"
* "webpack-cli": "^3.3.10"
* "webpack-dev-server": "^3.9.0"
* "ipfs-http-client": "^50.1.2"
* "@truffle/hdwallet-provider": "^1.4.1"

* Truffle v5.3.7 (core: 5.3.7)
* Solidity - 0.8.6 (solc-js)
* Node v16.3.0
* Web3.js v1.3.6

I am using truffle hdwallet provider to connect to rinkeby using my metamask credentials, webpack for the UI, and IPFS as per below section.
# IPFS
## Image upload
I have used the library ipfs-http-client to be able to complete the optional part of the project. This library allows controlling an IPFS node through Javascript.

More info on: https://docs.ipfs.io/reference/js/api/#ipfs-and-javascript and https://www.npmjs.com/package/ipfs-http-client

On Harvest, one has the option to upload the hash of a picture into a mapping with UPC as its key. And then, at any point, the owner of the contract can read that.


## Server hosting
TODO
# Front end
For the front end, I used truffle webpack box as a template and then built on top. The boilerplate code was too old, and updating it would have taken much more time than simply using this template.

To launch the front end, go to the app folder and then run:

npm run dev

This will run a server on localhost port 8080.

TODO: explain the steps and add screenshots

# Rinkeby
The contracts were deployed to the Rinkeby testnet at the following address:

| Contract Name   | Contract Address                           |
| --------------- | ------------------------------------------ |
| FarmerRole      | 0xEA116b82A5b177732f597083dB4308f058F48e2E |
| DistributorRole | 0x47d887F1Fcd997F05034135A34C39412ECf4C378 |
| RetailerRole    | 0x43598271E871f26d8187c6d6E687Da4476685AD0 |
| ConsumerRole    | 0xbf3dcF6e2C0795AbB7745a6ce681D3C079cF2Eb9 |
| SupplyChain     | 0x4E4321212677442166c0ef38862a8f98aD6fF715 |