var assert = require('assert');
var utils = require('../lib/utils/utils.js');

describe('lib/utils/utils', function () {
    describe('fromMey', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.fromMey(1000000000000000000, 'mey'),    '1000000000000000000');
            assert.equal(utils.fromMey(1000000000000000000, 'kmey'),   '1000000000000000');
            assert.equal(utils.fromMey(1000000000000000000, 'mmey'),   '1000000000000');
            assert.equal(utils.fromMey(1000000000000000000, 'gmey'),   '1000000000');
            assert.equal(utils.fromMey(1000000000000000000, 'szabo'),  '1000000');
            assert.equal(utils.fromMey(1000000000000000000, 'finney'), '1000');
            assert.equal(utils.fromMey(1000000000000000000, 'element'),  '1');
            assert.equal(utils.fromMey(1000000000000000000, 'kelement'), '0.001');
            assert.equal(utils.fromMey(1000000000000000000, 'grand'),  '0.001');
            assert.equal(utils.fromMey(1000000000000000000, 'melement'), '0.000001');
            assert.equal(utils.fromMey(1000000000000000000, 'gelement'), '0.000000001');
            assert.equal(utils.fromMey(1000000000000000000, 'telement'), '0.000000000001');
        });
    });
});
