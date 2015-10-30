//server
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/dev')).listen(8080);