                        // Conditional statements :--

let a = prompt("Hey enter your age ?");
a = Number.parseInt(a); //This will convert "a" into "Integer".
// a = Number.parseFloat(a); //This will convert "a" into "Float".

if (a<0) {
    console.log("Please enter valid age.");
}
else if(a>60){
    console.log("You are not allowed to drive.");
}
else if(a<18){
    console.log("1 sal rukjao");
}
else{
    console.log("you can drive");
}
console.log("Done");