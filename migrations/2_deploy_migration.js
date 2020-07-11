const DappTokens = artifacts.require('DappTokens')

module.exports = function (deployer) {
  deployer.deploy(DappTokens)
}
