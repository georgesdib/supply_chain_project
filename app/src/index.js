import Web3 from "web3";
import supplyChain from "../../build/contracts/SupplyChain.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = supplyChain.networks[networkId];
      this.meta = new web3.eth.Contract(
        supplyChain.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];

      this.initSupplyChain()
    } catch (error) {
      console.error("Could not connect to contract or chain:" + error);
    }
  },

  initSupplyChain: function () {
    this.fetchEvents();

    return this.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', App.handleButtonClick);
  },

  handleButtonClick: async function(event) {
    event.preventDefault();

    var processId = parseInt($(event.target).data('id'));
    console.log('processId',processId);

    switch(processId) {
        case 1:
            return await App.harvestItem(event);
        case 2:
            return await App.processItem(event);
        case 3:
            return await App.packItem(event);
        case 4:
            return await App.sellItem(event);
        case 5:
            return await App.buyItem(event);
        case 6:
            return await App.shipItem(event);
        case 7:
            return await App.receiveItem(event);
        case 8:
            return await App.purchaseItem(event);
        case 9:
            return await App.fetchItemBufferOne(event);
        case 10:
            return await App.fetchItemBufferTwo(event);
        case 11:
            return await App.addFarmer(event);
        case 12:
            return await App.addDistributor(event);
        case 13:
            return await App.addRetailer(event);
        case 14:
            return await App.addConsumer(event);
        case 15:
            return await App.transferOwnership(event);
    }
  },

  transferOwnership: function(event) {
    event.preventDefault();

    const { transferOwnership } = this.meta.methods;

    transferOwnership($("#address").val()).send({from: this.account})
    .then(function(result) {
      $("#ftc-item").text(JSON.stringify(result));
      console.log('transferOwnership',result);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  addConsumer: function(event) {
    event.preventDefault();

    const {addConsumer} = this.meta.methods;

    addConsumer($("#address").val()).send({from: this.account})
    .then(function(result) {
      $("#ftc-item").text(JSON.stringify(result));
      console.log('addConsumer',result);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  addRetailer: function(event) {
    event.preventDefault();

    const {addRetailer} = this.meta.methods;

    addRetailer($("#address").val()).send({from: this.account})
    .then(function(result) {
      $("#ftc-item").text(JSON.stringify(result));
      console.log('addRetailer',result);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  addFarmer: function(event) {
    event.preventDefault();

    const {addFarmer} = this.meta.methods;

    addFarmer($("#address").val()).send({from: this.account})
    .then(function(result) {
      $("#ftc-item").text(JSON.stringify(result));
      console.log('addFarmer',result);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  addDistributor: function(event) {
    event.preventDefault();

    const {addDistributor} = this.meta.methods;

    addDistributor($("#address").val()).send({from: this.account})
    .then(function(result) {
      $("#ftc-item").text(JSON.stringify(result));
      console.log('addDistributor',result);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  harvestItem: function(event) {
    event.preventDefault();
    const { harvestItem } = this.meta.methods;

    harvestItem(
      $("#upc").val(),
      this.account, 
      $("#originFarmName").val(),
      $("#originFarmInformation").val(), 
      $("#originFarmLatitude").val(),
      $("#originFarmLongitude").val(),
      $("#productNotes").val()
    ).send({from: this.account})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('harvestItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  processItem: function (event) {
    event.preventDefault();

    const { processItem } = this.meta.methods;

    processItem($("#upc").val()).send({from: this.account})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('processItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  packItem: function (event) {
    event.preventDefault();

    const { packItem } = this.meta.methods;

    packItem($("#upc").val()).send({from: this.account})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('packItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  sellItem: function (event) {
    event.preventDefault();

    const { sellItem } = this.meta.methods;

    sellItem($("#upc").val(), $("#productPrice").val()).send({from: this.account})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('sellItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  buyItem: function (event) {
    event.preventDefault();

    const { buyItem } = this.meta.methods;

    buyItem($("#upc").val()).send({from: this.account, value: $("#productPrice").val()})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('buyItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  shipItem: function (event) {
    event.preventDefault();

    const { shipItem } = this.meta.methods;

    shipItem($("#upc").val()).send({from: this.account})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('shipItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  receiveItem: function (event) {
    event.preventDefault();

    const { receiveItem } = this.meta.methods;

    receiveItem($("#upc").val()).send({from: this.account})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('receiveItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  purchaseItem: function (event) {
    event.preventDefault();

    const { purchaseItem } = this.meta.methods;

    purchaseItem($("#upc").val()).send({from: this.account})
    .then(function(result) {
        $("#ftc-item").text(JSON.stringify(result));
        console.log('purchaseItem',result);
    }).catch(function(err) {
        console.log(err.message);
    });
  },

  fetchItemBufferOne: function () {
    const { fetchItemBufferOne } = this.meta.methods;

    fetchItemBufferOne($("#upc").val()).call()
    .then(function(result) {
      $("#ftc-item").text(JSON.stringify(result));
      console.log('fetchItemBufferOne', result);
      $("#ownerID").val(result['2']);
      $("#sku").val(result['0']);
      $("#originFarmerID").val(result['3']);
      $("#originFarmName").val(result['4']);
      $("#originFarmInformation").val(result['5']);
      $("#originFarmLatitude").val(result['6']);
      $("#originFarmLongitude").val(result['7']);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  fetchItemBufferTwo: function () {
    const { fetchItemBufferTwo } = this.meta.methods;
                      
    fetchItemBufferTwo($("#upc").val()).call().then(function(result) {
      $("#ftc-item").text(JSON.stringify(result));
      console.log('fetchItemBufferTwo', result);
      $("#productNotes").val(result['3']);
      $("#productPrice").val(result['4']);
      $("#distributorID").val(result['6']);
      $("#retailerID").val(result['7']);
      $("#consumerID").val(result['8']);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  fetchEvents: function () {
    this.meta.events.allEvents((err, log) => {
      if (!err)
        $("#ftc-events").append('<li>' + log.event + ' - ' + log.transactionHash + '</li>');
    });
  }
};

window.App = App;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    window.ethereum.request({ method: 'eth_requestAccounts' });
    //window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  App.start();
});