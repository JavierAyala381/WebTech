// This is a comment

/**
 * This is one line
 * this is another line
 * COMMENT BLOCK
 */

/**VARIABLES AND TYPES
 * const - remains constant
 * let - changes its value with time
 * **/

// A) CONSTANTS
const myConst = 1
//myVar = 3 //HERE WE GET AN ERROR
console.log("Your const is", myConst)

// B) VARIABLES
let myVar = 4
console.log("Your variables is", myVar)
myVar = "Hello World"
console.log("Your variables is", myVar)

/** DATA TYPES */
const myNumber = 4 // THIS IS A NUMBER
const myString = "Hello World" // THIS IS A STRING!!
const myBoolean = true //THIS IS A BOOLEAN
const noData = undefined // THIS HAS NO DATA

const myList = ["A", "B", "C", "D"] //This is a list[]
const myMixList = ["A", 3, true, "..."] //This is a mix list[]

 //This is an object, a way to describe entities
const car = {
    model: "Tesla",
    color: "red",
    passengers: 4
}
// This is how we can access your properties 
console.log("What is the cars color?", car.color)

/** LOGIC AND OR NOT*/
/** AND is true when A AND B are true */
let result = false && true //&& <- this is AND
console.log("AND result",result)
result = true || false // || <- this is OR
console.log("OR result",result)
result = !true // ! <- this is OR
console.log("NOT result",result)

/** IF operation */
let condition = !false // this is a condition we will check
if (condition) {
    // this happens if true
    console.log("The condition is true")
} else {
    // this happens if false
    console.log("The condition is false")
}

/** LOOPS AND ITERATIONS */
//WHILE LOOP
let n = 0;
// This will execute until the condition is false
while (n < 3) {
    console.log(n)
    n=n+1; //n++
}

/** FOR LOOPS IN JS */
let str = '';
for (
    let i = 0; //Initial state
    i < 9; // Condition to be checked
    i++ // Some action to change the state
) {
    // HERE GOES YOUR CODE
    str = str + i;
}
console.log(str);

/** FUNCTIONS */
function SayMyName( 
    //Here goes the params of the function the "input data"
    name
) {
    // Here we perform some code
    return "Your name is " + name;
    // USE RETURN TO GIVE BACK A VALUE
}
/*
// This has no return value
function SayMyName(name) {
    console.log("Your name is :", name)
}*/

result=SayMyName("Javier :)")
console.log(result)
console.log(SayMyName("Marie"))







function addNumbers(a,b){
    return a+b;
    //depends on what are u doing
}









console.log(addNumbers(5,2))
console.log(addNumbers("Hello", "World"))

// This function takes no arguments and has no return
function sayHello(){
    console.log("Hello!!!")
}


sayHello()

// Math operations +, -, /

// WARNING BE CAREFUL WITH THE DATA TYPES
console.log(undefined-2)  