/*scope*/
/*if enter this into console*/
function aa() {
	console.log("test");
}
/*now function aa is part of window scope. If type in window and open up window,
YOu'll see that aa is now part of window scope, part of root or 
parent scope*/
 
 function bb(){
 	var a = "hello";
 }

 /* if run in console.log and call up console.log(a); will throw an error. a only lives within function aa. the scope is in inside of function bb. Have to call it like this*/
 function bb() {
 	var a = "hello";
 	console.log(a);
 }

 /*then when call function bb(), it will print hello. Function has access to any variable in the root scope.*/

 var b = "Can I access this?";

 function bb() {
 	var a = "hello";
 	console.log(b);
 }
 /*function bb has access to var b. window.bb exists and variable b lives on the window object. So they both have the same parent.*/

 /*Root scope (window)*/
 var fun = 5;

 
/*each of these functions create their own scope in each of these functions console.log(fun), but each is different based on their scope*/
 function funFunction() {
 	/*child scope*/
 	var fun = "hello";
 	console.log(1, fun);
 }

function funnerFunction() {
 	/*child scope*/
 	var fun = "bye";
 	console.log(2, fun);
 }

function funnestFunction() {
 	/*child scope*/
 	fun = "AHHHHH"; /*this changes var fun = 5 to var fun = AHHHH. 1 & 2 above won't have access to root scope. This is called a naming conflict, where we name things the same thing as something in parent scope, we'll lose access to it. But 3 has access to root scope.*/
 	console.log(3, fun);
 }

 console.log("window", fun);
 funFunction();
 funnerFunction();
 funnestFunction();