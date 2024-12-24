/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
};

require("@nomiclabs/hardhat-ethers");
module.exports = {
    solidity: "0.8.0", // Use the correct Solidity version for your contract
};


require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.0",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
    },
};
