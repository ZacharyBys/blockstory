App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("StoryBook.json", function(storybook) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.StoryBook = TruffleContract(storybook);
      // Connect provider to interact with contract
      App.contracts.StoryBook.setProvider(App.web3Provider);

      App.listenForEvents();

      return App.render();
    });
  },

  contribute: function() {
    var storyId = $('#storySelect').val();
    var storyText = $('#storyText').val();

    App.contracts.StoryBook.deployed().then(function(instance) {
      return instance.contributeToStory(storyId, storyText, { from: App.account });
    }).then(function(result) {
      // Wait for stories to update
      $("#content").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  },

  addStory: function() {
    var storyName = $('#storyName').val();
    
    App.contracts.StoryBook.deployed().then(function(instance) {
      return instance.addNewStory(storyName, { from: App.account });
    }).then(function(result) {
      // Wait for stories to update
      $("#content").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    })
  },

  listenForEvents: function() {
    App.contracts.StoryBook.deployed().then(function(instance) {
      instance.contributeEvent({}, {
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error, event) {
        console.log("event triggered", event)
        // Reload when a new vote is recorded
        App.render();
      });
    });
  },

  render: function() {
    var storybookInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.StoryBook.deployed().then(function(instance) {
      storybookInstance = instance;
      return storybookInstance.storiesCount();
    }).then(function(storiesCount) {
      var storiesResults = $("#storiesResults");
      storiesResults.empty();

      var storySelect = $("#storySelect");
      storySelect.empty();

      for (var i = 1; i <= storiesCount; i++) {
        storybookInstance.stories(i).then(function(story) {
          var id = story[0];
          var name = story[1];
          var body = story[2];

          var storyTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + body + "</td></tr>"
          storiesResults.append(storyTemplate);

          var storyOption = "<option value='" + id + "' >" + name + "</ option>"
          storySelect.append(storyOption);
        });
      }

      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});