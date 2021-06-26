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
First we need to build the website, go to the app folder, then run:

npm run build

This will create a folder there called dist, which we will upload to IPFS using:

ipfs add -r dist

This will add all the contents. so in my case I get the following:

georgesdib@Georgess-MacBook-Air app % ipfs add -r dist
added QmRdS48jjPDHSkbwopXt9tmPDo1EE6qhkMRt2PGTDHL22t dist/index.html
added QmZSZAGJfhubCDiBYZE5czcjPSfixWyXFeJg2Z8k19vn7n dist/index.js
added QmX7Q6inV1RntcfUUnmYAhq1WRfSpAEVAqFPbizbN6HJdj dist/style.css
added QmfQkBbTjJoi4eJiLh3XeWeJNNmWNejHjn6dshqrFyqjPi dist

Then using the hash of the directory <hash>, run the following command (make sure to have the daemon running first):

ipfs name publish <hash>

which in my case gives me:

georgesdib@Georgess-MacBook-Air app % ipfs name publish QmfQkBbTjJoi4eJiLh3XeWeJNNmWNejHjn6dshqrFyqjPi
Published to k51qzi5uqu5dkqfao771zgsi267v8z18bqm6zn4rlwt05bfysv0lvqvunxzae1: /ipfs/QmfQkBbTjJoi4eJiLh3XeWeJNNmWNejHjn6dshqrFyqjPi

I have also used a pinning service (Pinata) to pin my website, please find the link below:

https://gateway.pinata.cloud/ipfs/QmfQkBbTjJoi4eJiLh3XeWeJNNmWNejHjn6dshqrFyqjPi/
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
The contracts were deployed to the Rinkeby testnet at the following address:

| Contract Name   | Contract Address                           |
| --------------- | ------------------------------------------ |
| FarmerRole      | 0xEA116b82A5b177732f597083dB4308f058F48e2E |
| DistributorRole | 0x47d887F1Fcd997F05034135A34C39412ECf4C378 |
| RetailerRole    | 0x43598271E871f26d8187c6d6E687Da4476685AD0 |
| ConsumerRole    | 0xbf3dcF6e2C0795AbB7745a6ce681D3C079cF2Eb9 |
| SupplyChain     | 0x4E4321212677442166c0ef38862a8f98aD6fF715 |