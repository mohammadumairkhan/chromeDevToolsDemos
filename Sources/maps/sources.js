(function (){

	'use strict';

	var result = 0;

	var calculationMethod = {
		add: function add (operand){
			result += operand;
		},
		subtract: function subtract (operand){
			result -= operand;
		},
		multiply: function multiply (operand){
			result *= operand;
		},
		divide: function divide (operand){
			result /= operand;
		}
	};

	function getOperand (){
		return eval($('#calcInput').val());
	}

	function renderResult (){
		$('#calcResult').text(result);
	}

	function calculate (operator){
		var operand = getOperand();
		calculationMethod[operator].call(this, operand);
		renderResult();
	}

	function resetResult (){
		result = 0;
		renderResult();
	}

	this.calculate = calculate;
	this.resetResult = resetResult;

}.call(this));