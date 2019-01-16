/*
Write a JavaScript program that declares a function but calls it before it is declared. 

Write a function which is assigned to a variable. Call it before it is assigned and prove that this does not work.
*/

//This will work bc of hoisting
console.log("Function call before it's declared: "+test1(5));
console.log("Function call before it's declared: "+test1(6));
console.log("Function call before it's declared: "+test1(7));

function test1(x){
	return x*x;
}

//This will return an error
console.log("Function call from a variable pointing to a function: "+test2(2));

var test2 = function test1(x){
	return x*x*x;
}

