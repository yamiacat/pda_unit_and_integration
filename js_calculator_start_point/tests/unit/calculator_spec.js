var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });


  it('should have a total start at 0', function(){
    assert.equal(0, calculator.runningTotal)
  })


///TEST ADD FUNCTION
  it('should have total of 2 when add(2) used', function(){
    calculator.add(2);
    assert.equal(2, calculator.runningTotal)
  })

  it('should have total of 8 when add(8) used', function(){
    calculator.add(8);
    assert.equal(8, calculator.runningTotal)
  })

  it('should have total of -6 when add(-6) used', function(){
    calculator.add(-6);
    assert.equal(-6, calculator.runningTotal)
  })

  it('should have total of 3.5 when add(3.5) used', function(){
    calculator.add(3.5);
    assert.equal(3.5, calculator.runningTotal)
  })

///TEST SUBTRACT FUNCTION
  it('should have total of -2 when subtract(2) used', function(){
    calculator.subtract(2);
    assert.equal(-2, calculator.runningTotal)
  })

  it('should have total of -5 when subtract(5) used', function(){
    calculator.subtract(5);
    assert.equal(-5, calculator.runningTotal)
  })

  it('should have total of 9 when subtract(-9) used', function(){
    calculator.subtract(-9);
    assert.equal(9, calculator.runningTotal)
  })

///ESTABLISH ABILITY TO HARDCODE PREVIOUS TOTAL
  it('should have total of 9 when total hardcoded to 9', function(){
    calculator.previousTotal = 9;
    calculator.subtract(0);
    assert.equal(9, calculator.runningTotal)
  })

///TEST MULTIPLY FUNCTION

  it('should have total of 9 when multiply(3) used on hardcoded 3', function(){
    calculator.previousTotal = 3;
    calculator.multiply(3);
    assert.equal(9, calculator.runningTotal)
  })

  it('should have total of 15 when multiply(5) used on hardcoded 3', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })

  it('should have total of -21 when multiply(-7) used on hardcoded 3', function(){
    calculator.previousTotal = 3;
    calculator.multiply(-7);
    assert.equal(-21, calculator.runningTotal)
  })

  it('should have total of 5 when multiply(0.25) used on hardcoded 20', function(){
    calculator.previousTotal = 20;
    calculator.multiply(0.25);
    assert.equal(5, calculator.runningTotal)
  })


  ///TEST DIVIDE FUNCTION
  it('should have total of 10 when divide(3) used on hardcoded 30', function(){
    calculator.previousTotal = 30;
    calculator.divide(3);
    assert.equal(10, calculator.runningTotal)
  })

  it('should have total of 3 when divide(10) used on hardcoded 30', function(){
    calculator.previousTotal = 30;
    calculator.divide(10);
    assert.equal(3, calculator.runningTotal)
  })

  it('should have total of 6 when divide(.5) used on hardcoded 30', function(){
    calculator.previousTotal = 30;
    calculator.divide(.5);
    assert.equal(60, calculator.runningTotal)
  })

///////TEST NUMBERCLICK

  it('should have running total of 2 when 2 pressed', function(){
    calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal)
  })

  it('should have running total of 8 when 8 pressed', function(){
    calculator.numberClick(8);
    assert.equal(8, calculator.runningTotal)
  })


  ///////TEST CLEARCLICK

  it('should have running total of 0 when 2 pressed, then clearclick', function(){
    calculator.numberClick(2);
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

  it('should have running total of 0 when 9 pressed, then clearclick', function(){
    calculator.numberClick(9);
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

///////TEST CALCULATIONS USING NUMBERCLICK & OPERATORCLICK

/////////REQUIRED TASK
  it('should concatenate and have running total of 222 when 2 pressed 3 times', function(){
    calculator.numberClick(2);
    calculator.numberClick(2);
    calculator.numberClick(2);
    assert.equal(222, calculator.runningTotal)
  })

  it('should concatenate and have running total of 571 when 5, 7 and 1 pressed with no operators', function(){
    calculator.numberClick(5);
    calculator.numberClick(7);
    calculator.numberClick(1);
    assert.equal(571, calculator.runningTotal)
  })

  it('should add 2+2 and get 4', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    assert.equal(4, calculator.runningTotal)
  })

  it('should add 5+10 and get 15', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');

    assert.equal(15, calculator.runningTotal)
  })

////////////REQUIRED TASK
  it('should add 1+4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(5, calculator.runningTotal)
  })

  it('should subtract 10-4 and get 6', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(6, calculator.runningTotal)
  })

  it('should subtract 30-7 and get 23', function(){
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(7);
    calculator.operatorClick('=');

    assert.equal(23, calculator.runningTotal)
  })

//////////REQUIRED TASK
  it('should subtract 7-4 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(3, calculator.runningTotal)
  })


  it('should multiply 3*3 and get 9', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');

    assert.equal(9, calculator.runningTotal)
  })

  it('should multiply 10*10 and get 100', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('*');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');

    assert.equal(100, calculator.runningTotal)
  })

//////////REQUIRED TASK
  it('should multiply 3*5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');

    assert.equal(15, calculator.runningTotal)
  })

  it('should divide 9/3 and get 3', function(){
    calculator.numberClick(9);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');

    assert.equal(3, calculator.runningTotal)
  })

  it('should divide 50/5 and get 10', function(){
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('=');

    assert.equal(10, calculator.runningTotal)
  })

/////////REQUIRED TASK
  it('should divide 21/7 and get 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');

    assert.equal(3, calculator.runningTotal)
  })

  it('should add 3 + 8 + 12 and get 23', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('=');

    assert.equal(23, calculator.runningTotal)
  })

/////////////REQUIRED TASK
  it('should calculate 9 - 3 * 2 and get 12', function(){
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    assert.equal(12, calculator.runningTotal)
  })

//////////REQUIRED TASK
  it('should calculate 9 - 3 * 2 (clear) 4 and get 24', function(){
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.clearClick()
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(24, calculator.runningTotal)
  })


});
