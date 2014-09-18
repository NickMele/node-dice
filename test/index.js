var should = require('chai').should();
var dice = require('../dice');

var parsed = dice.parse('d20');
var format = dice.format(parsed);

describe('parse', function() {
  it('should always return an object', function() {
    parsed.should.be.an('object');
  });
  it('should have a property `times` that is a number', function() {
    parsed.should.have.property('times').that.is.a('number');
  });
  it('should have a property `faces` that is a number', function() {
    parsed.should.have.property('faces').that.is.a('number');
  });
  it('should have a property `keep` that is a number', function() {
    parsed.should.have.property('keep').that.is.a('number');
  });
  it('should have a property `lowest` that is a boolean', function() {
    parsed.should.have.property('lowest').that.is.a('boolean');
  });
  it('should have a property `highest` that is a boolean', function() {
    parsed.should.have.property('highest').that.is.a('boolean');
  });
  it('should have a property `multiplier` that is a number', function() {
    parsed.should.have.property('multiplier').that.is.a('number');
  });
  it('should have a property `modifier` that is a number', function() {
    parsed.should.have.property('modifier').that.is.a('number');
  });
  it('should have a property `repeat` that is a number', function() {
    parsed.should.have.property('repeat').that.is.a('number');
  });
});

describe('format', function() {
  it('should always return a string', function() {
    format.should.be.a('string');
  });
});
