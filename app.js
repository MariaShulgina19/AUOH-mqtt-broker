//this code is copied from https://github.com/moscajs/aedes/blob/master/docs/Examples.md => MQTT server over WebSocket
const aedes = require('aedes')() //need to install npm install aedes
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const port = process.env.PORT || 8081; //port chanded 
//add "srart": "node app.js  "

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
})