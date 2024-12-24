const hre = require("hardhat");

async function main() {
    // Compile the contract (ensures latest code is deployed)
    await hre.run("compile");

    // Deploy the TransferAll contract
    const TransferAll = await hre.ethers.getContractFactory("TransferAll");
    const transferAll = await TransferAll.deploy();

    await transferAll.deployed();

    console.log("TransferAll deployed to:", transferAll.address);
}

// Handle errors and run the script
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
