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

Application.prototype._handleRequest = function(path) {
  // we need access to handlerFn because we need to call it!
  var handler = this._handlers[path];
  if (handler) {
    handler();
  }
};

module.exports = Application;
