var display = document.getElementById('result_display_value');
var opDisplay = document.getElementById('operator_display');
var no1 = document.querySelectorAll('div#buttons_row_1 > div.button')[0];
var no2 = document.querySelectorAll('div#buttons_row_1 > div.button')[1];
var no3 = document.querySelectorAll('div#buttons_row_1 > div.button')[2];
var plus = document.querySelectorAll('div#buttons_row_1 > div.button')[3];
var no4 = document.querySelectorAll('div#buttons_row_2 > div.button')[0];
var no5 = document.querySelectorAll('div#buttons_row_2 > div.button')[1];
var no6 = document.querySelectorAll('div#buttons_row_2 > div.button')[2];
var minus = document.querySelectorAll('div#buttons_row_2 > div.button')[3];
var no7 = document.querySelectorAll('div#buttons_row_3 > div.button')[0];
var no8 = document.querySelectorAll('div#buttons_row_3 > div.button')[1];
var no9 = document.querySelectorAll('div#buttons_row_3 > div.button')[2];
var times = document.querySelectorAll('div#buttons_row_3 > div.button')[3];
var clear = document.querySelectorAll('div#buttons_row_4 > div.button')[0];
var no0 = document.querySelectorAll('div#buttons_row_4 > div.button')[1];
var enter = document.querySelectorAll('div#buttons_row_4 > div.button')[2];
var dividedBy = document.querySelectorAll('div#buttons_row_4 > div.button')[3];

var firstNumber;
var secondNumber;
var operand;
var solution;
var workingNumber = "";
var doTheMaths = {
  '+': function (first, second) { return first + second },
  '-': function (first, second) { return first - second },
  '*': function (first, second) { return first * second },
  '/': function (first, second) { return first / second },
};


function numberManager(number) {
  workingNumber += number;
  display.innerHTML = workingNumber;
};

function operandManager(operation) {
  opDisplay.innerHTML = operation;
  operand =  operation;
  firstNumber = workingNumber;
  workingNumber = "";
}

no1.addEventListener('click', function() {
  numberManager("1");
});

no2.addEventListener('click', function() {
  numberManager("2");
});

no3.addEventListener('click', function() {
  numberManager("3");
});

no4.addEventListener('click', function() {
  numberManager("4");
});

no5.addEventListener('click', function() {
  numberManager("5");
});

no6.addEventListener('click', function() {
  numberManager("6");
});

no7.addEventListener('click', function() {
  numberManager("7");
});

no8.addEventListener('click', function() {
  numberManager("8");
});

no9.addEventListener('click', function() {
  numberManager("9");
});

no0.addEventListener('click', function() {
  numberManager("0");
});

plus.addEventListener('click', function() {
  operandManager("+");
});

minus.addEventListener('click', function() {
  operandManager("-");
});

times.addEventListener('click', function() {
  operandManager("*");
});

dividedBy.addEventListener('click', function() {
  operandManager("/");
});

clear.addEventListener('click', function() {
  opDisplay.innerHTML = '';
  display.innerHTML = '';
  firstNumber = "";
  secondNumber = "";
  operand = "";
  solution = "";
  workingNumber = "";

});

enter.addEventListener('click', function(){
  solution = dotheMaths[operand](firstNumber, secondNumber);
  display.innerHTML = solution;
  opDisplay.innerHTML = '';
});
