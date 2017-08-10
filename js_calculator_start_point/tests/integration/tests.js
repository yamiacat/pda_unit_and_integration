var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // TEST NUMBER BUTTONS & CONCATENATION

  it('should have working number buttons 1', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('should have working number buttons 2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working number buttons 3', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should have working number buttons 4', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('should have working number buttons 5', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('should have working number buttons 6', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('should have working number buttons 7', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('should have working number buttons 8', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('should have working number buttons 9', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })

  it('should have working number buttons 0', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

  it('should have working number concatenation 666', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#number6')).click();
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('666')
  })

  it('should have working number concatenation 12345', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12345')
  })

/////TEST ARITHMETICAL FUNCTIONS

it('should calculate 2+2 and get 4', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4')
})

it('should calculate 10+6 and get 16', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('16')
})


it('should calculate 10-6 and get 4', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4')
})

it('should calculate 1-100 and get -99', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-99')
})

it('should calculate 5*5 and get 25', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('25')
})

it('should calculate 3*5 and get 15', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('15')
})

it('should calculate 30/5 and get 6', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('6')
})

it('should calculate 10/8 and get 1.25', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1.25')
})

/////TEST CHAINING ARITHMETICAL FUNCTIONS
it('should calculate 5-10*3 and get -15', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_subtract')).click();  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-15')
})

it('should calculate 5*10*3/15 and get 10', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_multiply')).click();  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_divide')).click();  element(by.css('#number1')).click();
  element(by.css('#number5')).click();element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('10')
})

///////TEST DECIMALS

it('should calculate 10/4 and get 2.5', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
})

it('should calculate 1/3 and get 0.3333333333', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0.3333333333333333')
})

///////TEST LARGE NUMBERS

it('should calculate 100*100*100*100 and get 100000000', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('100000000')
})

it('should calculate 1000*1000*1000*1000 and get 1000000000000', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1000000000000')
})

it('should calculate 10000*10000*10000*10000 and get 10000000000000000', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('10000000000000000')
})

///////TEST DIVIDE BY ZERO
it('should not be able to divide by zero', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Error!')
})


});
