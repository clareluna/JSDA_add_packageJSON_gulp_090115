'use strict';

var greet = require('../lib/greet.js');  
var chai = require('chai');
var expect = chai.expect;
var expect2 = require('chai').expect;

describe('greet', function() {
  it('should greet someone by name', function() {
    expect(greet('your name here')).to.eql('hello your name here');
  });
});