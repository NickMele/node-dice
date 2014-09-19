var should = require('chai').should();
var Dice = require('../dice');

var dice = new Dice();

var parsed = dice.parse('d20');
var format = dice.format(parsed);
var execute = dice.execute('d20');
var faces = 10;

describe('roll', function() {
  it('should always return a number', function() {
    dice.roll(faces).should.be.a('number');
  });
  it('should be within 1 and the number of faces provided (' + faces + ')', function() {
    dice.roll(faces).should.be.within(1, faces);
  });
});

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
  it('should have a property `keep` that is not undefined', function() {
    parsed.should.have.property('keep').that.is.not.undefined;
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
  it('should return a string', function() {
    format.should.be.a('string');
  });
});

describe('execute', function() {
  it('should return an object', function() {
    execute.should.be.an('object');
  });
  it('should have a property `command` that is a string', function() {
    execute.should.have.property('command').that.is.a('string');
  })
  it('should have a property `parsed` that is an object', function() {
    execute.should.have.property('parsed').that.is.an('object');
  });
  it('should have a property `outcomes` that is an array of at least 1 outcome', function() {
    execute.should.have.property('outcomes').that.is.an('array').to.have.length.of.at.least(1);
  });
  it('should have a property of `text` that is a string', function() {
    execute.should.have.property('text').that.is.a('string');
  });
  it('should have a property of `verbose` that is an array', function() {
    execute.should.have.property('verbose').that.is.an('array').that.is.not.empty;
  });
});
