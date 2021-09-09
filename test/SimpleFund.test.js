const BigNumber = require('bignumber.js');
const BN = BigNumber.clone({ DECIMAL_PLACES: 9 })
const chalk = require('chalk');
const { assert, expect,chai} = require('chai');
const { expectEvent, send, shouldFail, time, constants, balance} = require('@openzeppelin/test-helpers');

const SimpleFund = artifacts.require('SimpleERCFund');

contract('contracts/Ceres/CeresDemo.sol', async (accounts) => {
    // set the deploy address
	const account0 = accounts[0];
	const account1 = accounts[1];
	const account2 = accounts[2];
	const account3 = accounts[3];
    const account4 = accounts[4];
    const account5 = accounts[5];
    const account6 = accounts[6];
    const account7 = accounts[7];

    const OWNER = account0;
	const ADMIN = account1;
    const TEST_ACCOUNT = account7;

    let cssInstance;
    let ceresInstance;
    let instance_Pool_USDC;
    let instance_Pool_USDC_collateral_token;
    let col_instance_USDC;
    let instanceStakingRewards_CERES_WETH;
    let pair_addr_CERES_WETH;
    let pair_instance_CERES_WETH;
    let wethInstance;
    let uniswapFactoryInstance;
    let ceresDemoInstance;
    let routerInstance;
    let boardroomInstance;
    let treasuryInstance;
    let simpleFundInstance;
    beforeEach(async() => {
        simpleFundInstance = await SimpleFund.deployed();
    });

    it('check simpleFundInstance.address, its value is not be empty', async () => {
        console.log(chalk.blue(`simpleFundInstance: ${await simpleFundInstance.address}`));
        expect(simpleFundInstance.address).to.not.be.empty;
    });

    it('check simpleFundInstance.isOperator(from: OWNER), ITS VALUE IS TRUE', async () => {
        const INPUT_VALUE = OWNER;
        const EXPECTED_VALUE = true;
        expect(await simpleFundInstance.isOperator.call({from: INPUT_VALUE})).to.equal(EXPECTED_VALUE)
    });

    it('check simpleFundInstance.isOperator(from: TEST_ACCOUNT), ITS VALUE IS false', async () => {
        const INPUT_VALUE = TEST_ACCOUNT;
        const EXPECTED_VALUE = false;
        expect(await simpleFundInstance.isOperator.call({from: INPUT_VALUE})).to.equal(EXPECTED_VALUE)
    });
});
