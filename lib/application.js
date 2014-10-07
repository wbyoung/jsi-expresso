'use strict';

var http = require('http');

var Application = function() {
  this._handlers = {};
};

/**
 * Get request handler.
 *
 * @todo document this better.
 * @param {String} route The route that needs to be matched.
 * @param {Function} handlerFn The handler to call
 */
Application.prototype.get = function(route, handlerFn) {
  this._handlers[route] = handlerFn;
};

Application.prototype.put = function() {

};

Application.prototype.patch = function() {

};

Application.prototype.delete = function() {

};

/**
 * Listen for requests.
 *
 * @param {Number} port The port.
 * @param {Function} cb The callback to call when listening is done.
 */
Application.prototype.listen = function(port, cb) {
  var server = http.createServer(function(req, res) {

  });
  server.listen(port, cb);
  return server;
};

Application.prototype._handleRequest = function(path) {
  // we need access to handlerFn because we need to call it!
  var handler = this._handlers[path];
  if (handler) {
    handler();
  }
};

module.exports = Application;
