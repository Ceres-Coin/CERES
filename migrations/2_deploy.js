const BigNumber = require('bignumber.js');
const chalk = require('chalk');

module.exports = async function(deployer,network,accounts) {
  // Set the Network Settings
	const IS_MAINNET = (network == 'mainnet');
	const IS_ROPSTEN = (network == 'ropsten');
	const IS_DEV = (network == 'development');
	const IS_GANACHE = (network == 'devganache');
  	const IS_BSC_TESTNET = (network == 'testnet');
	const IS_RINKEBY = (network == 'rinkeby');

	// set the deploy address
	const OWNER = accounts[0];
	const ADMIN = accounts[1];
	const account0 = accounts[0];
	const account1 = accounts[1];
	const account2 = accounts[2];
	const account3 = accounts[3];
	const account4 = accounts[4];
	const account5 = accounts[5];
	const account6 = accounts[6];
	const account7 = accounts[7];
	console.log(chalk.red.bold(`account0: ${account0}`));
	console.log(chalk.red.bold(`account1: ${account1}`));
	console.log(chalk.red.bold(`account2: ${account2}`));
	console.log(chalk.red.bold(`account3: ${account3}`));
	console.log(chalk.red.bold(`account4: ${account4}`));
	console.log(chalk.red.bold(`account5: ${account5}`));
	console.log(chalk.red.bold(`account6: ${account6}`));
	console.log(chalk.red.bold(`account7: ${account7}`));

    const FIVE_MILLION_DEC18 = new BigNumber("5000000e18");
	const ONE_HUNDRED_MILLION_DEC18 = new BigNumber("100000000e18");
};
