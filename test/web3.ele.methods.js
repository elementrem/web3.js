var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var web3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('web3.ele', function() {
    describe('methods', function() {
        u.methodExists(web3.ele, 'getBalance');
        u.methodExists(web3.ele, 'getStorageAt');
        u.methodExists(web3.ele, 'getTransactionCount');
        u.methodExists(web3.ele, 'getCode');
        u.methodExists(web3.ele, 'sendTransaction');
        u.methodExists(web3.ele, 'call');
        u.methodExists(web3.ele, 'getBlock');
        u.methodExists(web3.ele, 'getTransaction');
        u.methodExists(web3.ele, 'getUncle');
        u.methodExists(web3.ele, 'getCompilers');
        u.methodExists(web3.ele.compile, 'lll');
        u.methodExists(web3.ele.compile, 'solidity');
        u.methodExists(web3.ele.compile, 'serpent');
        u.methodExists(web3.ele, 'getBlockTransactionCount');
        u.methodExists(web3.ele, 'getBlockUncleCount');
        u.methodExists(web3.ele, 'filter');
        u.methodExists(web3.ele, 'contract');

        u.propertyExists(web3.ele, 'coinbase');
        u.propertyExists(web3.ele, 'mining');
        u.propertyExists(web3.ele, 'gasPrice');
        u.propertyExists(web3.ele, 'accounts');
        u.propertyExists(web3.ele, 'defaultBlock');
        u.propertyExists(web3.ele, 'blockNumber');
    });
});

