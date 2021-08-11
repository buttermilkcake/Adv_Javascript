/*TERNARY OPERATORS*/
/*Is this condition true, if so provide the value of expr1, otherwise, provide the value of expr2.*/
condition ? expr1 : expr2

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
/*to call this in the console, just type in answer.*/


function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(false) ? "You may enter" : "Access Denied";
/*This will give you the opposite answer from above.*/

var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "not available");
/*you would call this in the console by typing in automatedAnswer. To get opposite, change bool value to true*/

/*The above isn't much different than this, however the above is a much simpler way to code it. Ternary operators are really good for if/else statments when there is a check for a condition and 2 possible expressions that come out of it.*/
function condition() {
	if (isUserValid(true)) {
		return "You may enter"; 
	} else{
		return "Access denied";
	}
}
var answer2 = condition();
/*You call this function in the console by entering answer2*/ 

/*SwITCH STATEMENTS. These are very good for cases where you have a lot of conditions. Much better choice than if/else/if.*/

function moveCommand(direction) {
	var whatHappens;
	switch(direction) {
		case "forward":
			whatHappens = "you encounter a monster";
		break;
		case "back":
			whatHappens = "you arrived home";
		break;
		case "right":
			whatHappens = "you found a river";
		break;
		case "left":
			whatHappens = "you run into a troll";
		break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}
/*in console, we have move command, so press circle with line thru it symbol and enter move and choose moveCommand and then type in window.moveCommand("forward"); the break says break out of the switch statement and goes to the return command.*/