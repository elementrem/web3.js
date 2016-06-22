var chai = require('chai');
var utils = require('../lib/utils/utils');
var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toMey', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.toMey(1, 'mey'),    '1');
            assert.equal(utils.toMey(1, 'kmey'),   '1000');
            assert.equal(utils.toMey(1, 'Kmey'),   '1000');
            assert.equal(utils.toMey(1, 'babbage'),   '1000');
            assert.equal(utils.toMey(1, 'mmey'),   '1000000');
            assert.equal(utils.toMey(1, 'Mmey'),   '1000000');
            assert.equal(utils.toMey(1, 'lovelace'),   '1000000');
            assert.equal(utils.toMey(1, 'gmey'),   '1000000000');
            assert.equal(utils.toMey(1, 'Gmey'),   '1000000000');
            assert.equal(utils.toMey(1, 'shannon'),   '1000000000');
            assert.equal(utils.toMey(1, 'szabo'),  '1000000000000');
            assert.equal(utils.toMey(1, 'finney'), '1000000000000000');
            assert.equal(utils.toMey(1, 'element'),  '1000000000000000000');
            assert.equal(utils.toMey(1, 'kelement'), '1000000000000000000000');
            assert.equal(utils.toMey(1, 'grand'),  '1000000000000000000000');
            assert.equal(utils.toMey(1, 'melement'), '1000000000000000000000000');
            assert.equal(utils.toMey(1, 'gelement'), '1000000000000000000000000000');
            assert.equal(utils.toMey(1, 'telement'), '1000000000000000000000000000000');

            assert.equal(utils.toMey(1, 'kmey'),    utils.toMey(1, 'femtoelement'));
            assert.equal(utils.toMey(1, 'szabo'),   utils.toMey(1, 'microelement'));
            assert.equal(utils.toMey(1, 'finney'),  utils.toMey(1, 'millielement'));
            assert.equal(utils.toMey(1, 'milli'),    utils.toMey(1, 'millielement'));
            assert.equal(utils.toMey(1, 'milli'),    utils.toMey(1000, 'micro'));

            assert.throws(function () {utils.toMey(1, 'mey1');}, Error);
        });
    });
});
