#Elementrem web3.js

web3.js is more comfortable & full feature calling the library that Elementrem JSON RPC.        
web3.js is very useful when you implement the JavaScript based on Dapp or service.        
[Elementrem Mist Wallet](https://github.com/elementrem/mist) and [Block Explorer](http://www.elementrem.net) is also implemented in web3.js.           


* [web3.js Documentation](web3_document.md)

### Install	
**Prerequisite**
* [Node.js](https://nodejs.org/)    
Ubuntu, for instance    
`curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`  
`apt-get install -y nodejs`
`npm install npm -g`      
`apt install node-gyp`

* [bower](https://bower.io/)        
Ubuntu, for instance    
`npm install -g bower`

**Install**

```
$ git clone https://github.com/elementrem/web3.js
$ git checkout master
$ cd web3.js
$ npm install
$ npm test
...
....
.....
      ✓ sync test: 0
      ✓ async test: 0
      ✓ sync test: 1
      ✓ async test: 1


  630 passing (712ms)

```
*If that does not npm test `passing`, Make sure your git branch is master.*

