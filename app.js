console.log("Hello, my name is Garfield.");

var promptQuestion = "Will Garfield become a good developer?"
var response = prompt (promptQuestion); 
console. log(response);

var alertMessage;

if (response == "No") {
    alertMessage = "No one really knows, we shall see"
} else if (response == "Yes") {
    alertMessage = "Yea your right he's a pretty driven and motivated guy!"
} else {
    alertMessage = "I think he will do great things."
}
alert(alertMessage);