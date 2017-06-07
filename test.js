// for NinchatClient
global.WebSocket = require('ws')
global.XMLHttpRequest = require('xhr2')

require('./ninchat-js/gen/ninchatclient.js')
console.log(NinchatClient)

var ninchatMaster = require('./ninchat-nodejs/ninchat/master.js')
console.log(ninchatMaster)
