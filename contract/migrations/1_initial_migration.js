const SuperFighters = artifacts.require("SuperFighters");

module.exports = function (deployer) {
  deployer.deploy(SuperFighters);
};
