var StoryBook = artifacts.require("./StoryBook.sol");

module.exports = function(deployer) {
    deployer.deploy(StoryBook);
}