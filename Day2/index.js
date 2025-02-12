var fullname = "rohith";
var initial = 'M H';
var age = 19;
var isTrainer = true;
var college;
var tech = null;

console.log(fullname);
console.log(initial);
console.log(age);
console.log(isTrainer);
console.log(college);
console.log(tech);


console.log("My name is " + fullname + " " + initial + ". I'm, " + age + " years old");
//single line comment
/* This is a
m
u
l
t
i
-
l
i
n
e 
comment */


var num1 = 10, num2 =  15;
console.log("Addition: ");
console.log(num1 + num2);
console.log("Multiplication: ");
console.log(num1 * num2);
console.log("Subtraction: ");
console.log(num2 - num1);
console.log("Division for Qutient: ");
console.log(num1 / num2);
console.log("Exponent: ");
console.log(num1 ** num2);



//Relational Operators
console.log("Greater than: ");
console.log(num1 > num2);
console.log("Lesser than: ");
console.log(num1 < num2);
console.log("Greater than or Equal to: ");
console.log(num1 >= num2);
console.log("Lesser than or Equal to: ");
console.log(num1 <= num2);
console.log("Not Equal to: ");
console.log(num1 != num2);
console.log("\n");
var num3 = '10'
console.log("Equal to: ");
console.log(num1 == num3);
console.log("Strictly Equal to: ");
console.log(num1 === num3);

//Logical operators: &&, ||, |
var Age = 23;
var canDrive = true;
console.log("Outcome for AND: ");
console.log(Age > 18 && canDrive == false);
console.log("Outcome for OR: ");
console.log(Age > 18 || canDrive ==false);
console.log("Outcome for NOT: ");
console.log(!canDrive);

// Assignment Operators
console.log("Addition and Assignment");
console.log(num1 += -18);

console.log("Subtraction and Assignment");
console.log(num1 -= 10);

console.log("Multiplication and Assignment");
console.log(num1 *= 10);

console.log("Division for Quotient and Assignment");
console.log(num1 /= 10);

console.log("Division for Remainder and Assignment");
console.log(num1 %= 10);

// condition statemnts
// if, if else, nested if
var votingAge = 17;
if(votingAge >= 18){
    console.log("The person can vote");
}
else{
    console.log("The person can't vote");
}

var personAge = 18;
var hasDL = true;
if(personAge > 18){
    console.log("He/She can vote");
}else if(personAge < 16){
    console.log("He/She can't vote");
}else{
    console.log("He/She is not Indian");
}

