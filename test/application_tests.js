'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));

var expect = chai.expect;
var request = require('request');
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

  it('can listen for requests', function(done) {
    var app = new Application();
    var server = app.listen(38292, function() {
      server.close(function() {
        done();
      });
    });
  });

  it('dispatches requests properly', function(done) {
    var spy = sinon.spy(function(req, res) {
      res.write('Hello world');
      res.end();
    });
    var app = new Application();
    app.get('/index.html', spy);
    var server = app.listen(38292, function() {
      request.get('http://localhost:38292/index.html', function(err, response, body) {
        expect(spy).to.have.been.calledOnce;
        expect(body).to.eql('Hello world');
        server.close(function() {
          done();
        });
      });
    });
  });
});
