
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
} /*3*/ /* to call up this function in the console, type this: console.log(q1());*/

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
} /*I was wrong, you first have to run q2() in the console to add the new value, then run q22(), which makes it 5.*/


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
/*I was wong, YOu must first rn q3() to add the a property to window, then run q32, so the answer is hello.*/

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
/*I was wrong, apparently it's test but that doesn't make sense to me. because the orig variable is outside the function and I wouldn't think the var inside the function has the power to change that.*/

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

/*5*/