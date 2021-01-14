//create a variable that contains your name as a value.
var firstName = "Kaden"; 

//Create a constant that contains the number of states in the U.S. and name it appropriately.
const states = 50;

//Compute the result of adding 5 and 4 and store it in an appropriately named variable.
var sum = 5 + 4; 

//Write a function called sayHello that displays an alert that says Hello World!
function sayHello() {
    alert('Hello World!');
}

sayHello('Hello World!');

//Write a function called checkAge that takes two arguments: one for a name and one for an age. If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry" + " " + name + ", you aren't old enough to view this page!");
    }
}
//Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
checkAge("Charles", 21);

checkAge("Abby", 27);

checkAge("James", 18)

checkAge("John", 17)

//Create an array of your favorite vegetables and name it accordingly.
let vegis = ["Broccoli", "Carrots", "Potatoes", "Celery", "Cucumbers"]

//Use a loop to display each of your favorite vegetables to the developer console.
for (let i = 0; i < vegis.length; ++i) {
    console.log(vegis[i]);
}
//Create an object named pet with two properties, name and breed. Use your own pets name and breed as the values! Or make one up if you don't own a pet.
let pet = {
    name: "Mizuno",
    breed: "Golden Retriever"
}

//Display a console log displaying your pets name and breed after creating your pet object.
console.log(pet)

//Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+.
let nameAge = [{name: "Heidi", age: 45}, {name: "Bill", age: 45}, {name: "Zac", age: 28}, {name: "Brecken", age: 16}, {name: "Camden", age: 14}];

//Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.
for (let i = 0; i < nameAge.length; ++i) {
    (checkAge(nameAge[i].name, nameAge[i].age));
}

//Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
function getLength (word) {
    return word.length;
}

//Call the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.
getLength ("Hello World!");

let result = getLength("Hello World!");

//If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.
if (result % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place.");
}