let assert = require("assert");
let greet = require("../greet");

describe('The greet function' , function(){
    it('should return "Hello Zama" when I greet Zama' , function(){
        
        assert.equal(greet('Zama'), 'Hello, Zama');
        
    });

});