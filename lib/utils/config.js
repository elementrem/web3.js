/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file config.js
 * @authors:
 *   
 * @date 2015
 */

/**
 * Utils
 * 
 * @module utils
 */

/**
 * Utility functions
 * 
 * @class [utils] config
 * @constructor
 */


/// required to define ELE_BIGNUMBER_ROUNDING_MODE
var BigNumber = require('bignumber.js');

var ELE_UNITS = [
    'mey',
    'kmey',
    'Mmey',
    'Gmey',
    'szabo',
    'finney',
    'femtoelement',
    'picoelement',
    'nanoelement',
    'microelement',
    'millielement',
    'nano',
    'micro',
    'milli',
    'element',
    'grand',
    'Melement',
    'Gelement',
    'Telement',
    'Pelement',
    'Eelement',
    'Zelement',
    'Yelement',
    'Nelement',
    'Delement',
    'Velement',
    'Uelement'
];

module.exports = {
    ELE_PADDING: 32,
    ELE_SIGNATURE_LENGTH: 4,
    ELE_UNITS: ELE_UNITS,
    ELE_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: BigNumber.ROUND_DOWN },
    ELE_POLLING_TIMEOUT: 1000/2,
    defaultBlock: 'latest',
    defaultAccount: undefined
};

