const WebSocket = require('ws');

const server = new WebSocket.Server({
    port: 8080,
    clientTracking: true
}, function () {
    console.log("WebSocket Server now running on port 8080....");
});