console.log("Hello, my name is Garfield.");

var promptQuestion = "Will Garfield become a good developer?";
var response = prompt(promptQuestion); 
console. log(response);

var alertMessage;

if (response == "No") {
    alertMessage = "No one really knows, we shall see";
} else if (response == "Yes") {
    alertMessage = "Yea your right he's a pretty driven and motivated guy!";
} else {
    alertMessage = "I think he will do great things.";
}
alert(alertMessage);

var promptQuestion = "Do you like ice cream?";
var response = prompt(promptQuestion); 
console.log (response);

if (response == "yes"){
    alertMessage = "good choice I like Ice Cream also";
} else if (response = "no"){
    alertMessage = "why not? ice cream is good for you";
}
alert (alertMessage);

var promptQuestion = "Do you like Beer?";
var response = prompt(promptQuestion); 
console.log (response);

if (response == "yes"){
    alertMessage = "good choice beer is delicious";
} else if (response = "no"){
    alertMessage = "wise man alcohol isnt good for you";
}
alert (alertMessage);

// function begin (string1, string2) {
//     let bigstring = string1+" "+string2
//     alert(bigstring)
// }
// begin("start", "end")

// function addThree (a, b, c){ //declaring a function
//     let answer = a+b+c  //declaring the variable answer and assigning it to the result of a+b+c
//     alert(answer) //calling a function alert, passing answer as the parameter
// }

// addThree (22,33,44) 

// function addThree (a, b, c){ //declaring a function called addThree with  3 params
//     let answer = a+b+c  //declaring the variable answer and assigning it to the result of a+b+c
//     return answer       //retun ends the function 
//     console.log ("whats for dinner")  //will never get called
// }
// let sum = addThree (22,33,44) //declare a var called sum
// alert (sum)  //calling function alert with param sum in order to get its side effect. a side effect is something a function does that is not related to its return. 
