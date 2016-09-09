'use strict';

var app = require('./index');
var http = require('http');

var server;

/*
 * Create and start HTTP server.
 *
 * Note : If it's the first time setting up ensure you port forward using your internal private ip
 * Also goes for https, just route from 443 to 8000
 * sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j DNAT --to 172.31.1.17:8000
 * sudo iptables -A FORWARD -p tcp -d 172.31.1.17 --dport 8000 -j ACCEPT
 */

server = http.createServer(app);
server.listen(process.env.PORT || 3000);
server.on('listening', function () {
    console.log('Frontline Processing Testbed Listening on http://localhost:%d', this.address().port);
});