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

I am using web3 as a javascript library that allows me to interact with a local blockchain for testing (running Ganache for example), but also the Ethereum testnets and mainnet. Without web3, it would be very difficult to do that as it provides all the needed interfaces.

I am using truffle as a tool and library for Ethereum smart contract development. Truffle offers a local blockchain, but also an all inclusive framework ranging from smart contract deployment on the chain, to providing a testing framework, a front end, as well as a series of "boxes" that serve as a starting template.
# IPFS
## Image upload
I have used the library ipfs-http-client to be able to complete the optional part of the project. This library allows controlling an IPFS node through Javascript.

More info on: https://docs.ipfs.io/reference/js/api/#ipfs-and-javascript and https://www.npmjs.com/package/ipfs-http-client

On Harvest, one has the option to upload the hash of a picture into a mapping with UPC as its key. And then, at any point, the owner of the contract can read that.


## Server hosting
First we need to build the website, go to the app folder, then run:

npm run build

This will create a folder there called dist, which we will upload to IPFS using:

ipfs add -r dist

This will add all the contents. so in my case I get the following:

georgesdib@Georgess-MacBook-Air app % ipfs add -r dist 
added QmRdS48jjPDHSkbwopXt9tmPDo1EE6qhkMRt2PGTDHL22t dist/index.html
added QmZKbWbN62FN3ivcsMULVi9QxtbAocY6GzFEySL7wynakB dist/index.js
added QmX7Q6inV1RntcfUUnmYAhq1WRfSpAEVAqFPbizbN6HJdj dist/style.css
added QmQG1ipLYsBQMuJrGD5GM3dNjehMnWn7Bi7XKgNUxekaPv dist

Then using the hash of the directory <hash>, run the following command (make sure to have the daemon running first):

ipfs name publish <hash>

which in my case gives me:

georgesdib@Georgess-MacBook-Air app % ipfs name publish QmQG1ipLYsBQMuJrGD5GM3dNjehMnWn7Bi7XKgNUxekaPv
Published to k51qzi5uqu5dkqfao771zgsi267v8z18bqm6zn4rlwt05bfysv0lvqvunxzae1: /ipfs/QmQG1ipLYsBQMuJrGD5GM3dNjehMnWn7Bi7XKgNUxekaPv

I have also used a pinning service (Pinata) to pin my website, please find the link below:

https://gateway.pinata.cloud/ipfs/QmQG1ipLYsBQMuJrGD5GM3dNjehMnWn7Bi7XKgNUxekaPv/
# Front end
For the front end, I used truffle webpack box as a template and then built on top. The boilerplate code was too old, and updating it would have taken much more time than simply using this template.

To launch the front end, go to the app folder and then run:

npm run dev

This will run a server on localhost port 8080.

Then you open the website, and then you follow these steps (please find the accompanying screenshots under the folder screenshots):

* Make sure you are connected to the relevant network (Rinkeby or your local dev).
* Select the UPC (in my example 10).
* Optional: Upload a picture by clicking on 'Choose file' under 'IPFS Hash' (screenshot ipfs_hash.png). This will display the IPFS Hash of the picture, and that hash will be uploaded as part of the Harvest call.
* Scroll down to the "Farm Details" (screenshot farm_details.png), fill all those details (or leave the default ones), and then hit "Harvest", this will prompt you to accept the transaction using Metamask.
* Once transaction is mined, you will get an update of the events in the bottom section.
* Then hit on "Process", "Pack", "ForSale" using the same procedure as for "Harvest". You need to specify the price in the section "Product Details" (screenshot product_details.png).
* Then scroll down to the section "Product Details", and there you can "Buy" (sending the price you put in the field), "Ship", "Receive", and "Purchase".

That is the end to end process. After you are done, you can check at the bottom "Transaction History" and you should see the full history as per the screenshot transaction_history.png

Few things to note, each step can be done by a specified role, by default the owner of the smart contract holds all those roles, but you can change that using the "Add Farmer" etc. buttons. You can also transfer ownership.

The IPFS Hash of the picture is a hyperlink, if you click on it, it will take you to the IPFS page. Also, if you select the UPC you want, and click on "Get IPFS Hash", it will grab the hash for that UPC.

Also note the 2 buttons "Fetch Data 1" and "Fetch Data 2" would output the data to the console, but will also populate the relevant fields (and therefore you would lose the default values populated there).

# Rinkeby
## Contracts
The contracts were deployed to the Rinkeby testnet at the following address:

| Contract Name   | Contract Address                           |
| --------------- | ------------------------------------------ |
| FarmerRole      | 0xcDBeeC3332A5Fb8e183f7393C197d2d3DdAb0549 |
| DistributorRole | 0x875DB553fEf42e234c4cfc5cB0c9bDC91047FEab |
| RetailerRole    | 0x2E888C8150243c75959E5C78cBd3C3A871c127a3 |
| ConsumerRole    | 0xD4d250d3C20f9eA2d95BeC3DE9B4780AA064De3D |
| SupplyChain     | 0x89337E44DbfBb5c60c16D825A0Cee42C0248766d |

## Transactions
Please find below the Transaction IDs:

| Action    | Transaction ID                                                     |
| --------- | ------------------------------------------------------------------ |
| Harvested | 0x524e1d4c8b85a62638e06032e8cf63dccfd58952558e25df01a3b318fc677808 |
| Processed | 0x1f9700c673ccf22bfd2412906cb38bff24697d5efd6faaf800bfc348ed9ce834 |
| Packed    | 0x1bc775adc7a877b060d7a12d8ac12399bf2fdfef41c1431678195834b08b97e7 |
| ForSale   | 0x2279f9089575c35767d9e730a50748841de16b9696ab4c02b68049c5de29cc4b |
| Sold      | 0x2da3eee2286746cc84af2928beb098af941e3e293339cf6dc4665bbf98c83130 |
| Shipped   | 0x212d7a966fa772eaa73825953ce650eea3634878806767b11a3431e385b3f124 |
| Received  | 0x40ac719054e97d0667daf26594f288c8fc426f430852fb28da8d5e59b170d6c4 |
| Purchased | 0x232b4474fcb4b0d1e36b660f7dcb388169000760ba09b38efc968a19343406a9 |