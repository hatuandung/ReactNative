var a = 6; //function scope
let b = 7; //block scope

function aFunction(){
    var i = 5;
    for(let j = 0; j < 10; j++){
        
    }
}

const c = 10 //block scope constant
const obj = {
    name ="Duc"
}
obj = {name = "Not Duc"}; //error
obj.name = "not Duc";

function sayHello(){
    console.log("Hello");
}

const anotherSayHello = function() {
    console.log("Hello");
};

const printANumber = function(number){
    console.log(number);
};
/*const addNumber = (a, b) => {
    return a + b;
};*/

const addNumber = (a, b) => a + b; //viet tat ham ben tren

/*const arrowPrintNunber = (number) => {
    console.log(number);
};*/

const arrowPrintNunber = number => console.log(number);// viet tat ham ben tren

const addTen = number => number + 10;
const addEight = number => number + 8;

//Currying
const createAddFunction = number1 => number2 => number1 + number2;
//midleware

const userName = "HTD";
const string1 = "hello" + userName;
const string2 = `hello2 ${userName}` ;
const age = 21;
console.log(`You are ${age > 21 ? "old" : "young"}`); //ternary operator
// big 3 function
// map()
// filter()
// reduce()
const numbers = [1, 3, 4, 7];

const doubles = numbers.map(number => number * 2);

const fav = playlist.filter(song => song.includes("troi"));//loc tat ca bai hat co tu troi

const sum = numbers.reduce((sum, number) => number + sum);
//(0,1) =>1+0
//(1,3) => 1+3
//(4,4) => 4+4
//(8,7) => 8+7
//sum = 15



