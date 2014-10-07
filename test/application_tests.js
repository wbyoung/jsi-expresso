'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));

var expect = chai.expect;
var sinon = require('sinon');
var Application = require('../lib/application');

describe('Application', function() {
  it('routes get requests', function() {
    var spy = sinon.spy();
    var app = new Application();
    app.get('/index.html', spy);

    app._handleRequest('/index.html');

    expect(spy).to.have.been.calledOnce;
  });

  it('does not call handler if route doesn\'t match', function() {
    var spy = sinon.spy();
    var app = new Application();
    app.get('/index.html', spy);

    app._handleRequest('/index2.html');

    expect(spy).to.not.have.been.called;
  });
});
