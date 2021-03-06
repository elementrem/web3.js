var Web3 = require('../index.js');
var web3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('web3', function() {
    describe('methods', function () {
        u.methodExists(web3, 'sha3');
        u.methodExists(web3, 'toAscii');
        u.methodExists(web3, 'fromAscii');
        u.methodExists(web3, 'toDecimal');
        u.methodExists(web3, 'fromDecimal');
        u.methodExists(web3, 'fromMey');
        u.methodExists(web3, 'toMey');
        u.methodExists(web3, 'toBigNumber');
        u.methodExists(web3, 'isAddress');
        u.methodExists(web3, 'setProvider');
        u.methodExists(web3, 'reset');

        u.propertyExists(web3, 'providers');
        u.propertyExists(web3, 'ele');
        u.propertyExists(web3, 'db');
        u.propertyExists(web3, 'shh');
    });
});

