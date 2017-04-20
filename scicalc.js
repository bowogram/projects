function addChar(input, character) {
	if (input.value == null || input.value == "0")
		input.value = character;
	else
		input.value += character;
}


function factorial(x) {
	if (x === 0) {
		return 1;
	}
	return x * factorial(x - 1);
}

function fac(form) {
	form.output.value = factorial(eval(form.display.value));
	form.display.value =  + form.display.value + "!";
}

function pow10(form){
	form.output.value=Math.pow(10, eval(form.display.value));
	form.display.value = "10^(" + form.display.value + ")";
}


function cos(form) {
	var temp=form.display.value;
	var rad= Math.PI/180;
	var x=form.display.value * rad;
	form.output.value = Math.cos(x);
	form.display.value = "cos(" + form.display.value + ")";
}

function sin(form) {
	var temp=form.display.value;
	var rad= Math.PI/180;
	var x=form.display.value * rad;
	form.output.value = Math.sin(x);
	form.display.value = "sin(" + form.display.value + ")";
}

function tan(form) {
	var temp=form.display.value;
	var rad= Math.PI/180;
	var x=form.display.value * rad;
	form.output.value = Math.tan(x);
	form.display.value = "tan(" + form.display.value + ")";
}

function acos(form) {
	form.output.value = Math.acos(form.display.value);
	var rad=Math.PI/180;
	form.output.value/=rad;
	form.display.value = "acos(" + form.display.value + ")";
}

function asin(form) {
	form.output.value = Math.asin(form.display.value);
	var rad=Math.PI/180;
	form.output.value/=rad;
	form.display.value = "asin(" + form.display.value + ")";
}

function atan(form) {
	form.output.value = Math.atan(form.display.value);
	var rad=Math.PI/180;
	form.output.value/=rad;
	form.display.value = "atan(" + form.display.value + ")";
}

function sqrt(form) {
	form.output.value = Math.sqrt(form.display.value);
	form.display.value = "sqrt(" + form.display.value + ")";
}

function ln(form) {
	form.output.value = Math.log(form.display.value);
	form.display.value = "log(" + form.display.value + ")";
}
function log10(form) {
	form.output.value = Math.log10(form.display.value);
	form.display.value = "log10(" + form.display.value + ")";
}
function exp(form) {
	form.output.value = Math.exp(form.display.value);
	form.display.value = "e^("+ form.display.value + ")";
}

function deleteChar(form) {
	input.value = input.value.substring(0, input.value.length - 1);
	
}

function compute(form) {
	form.output.value = eval(form.display.value);
}

function square(form) {
	form.output.value = eval(form.display.value) * eval(form.display.value);
	form.display.value = form.display.value + "^2";
	
}
function cube(form) {
	form.output.value = eval(form.display.value) * eval(form.display.value) * eval(form.display.value);
	form.display.value = form.display.value + "^3";
}


function ans(form) {
	form.display.value = form.output.value;
	form.output.value= '';
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i + 1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "^"  && ch != "-" && ch != "." && ch != "%" && ch != "(" && ch != ")") {
				form.output.value= "error";
				return false
			}
		}
	}
	return true
}