//Hoisting :- process of moving function declaration to the top of file.
            //   done automatically by JS Engine

//Function call or invoke
// run();

/* //function declaration 
function run(){
    console.log('running');
} */

/* //function assingment
let stand = function walk() {
    console.log('Walking');
};

stand();//We cannot call this function before writing the function.
//This is the main diff. b/w func declaration and fun assingment 
// walk();//Error

let jump = stand;
jump();


function sum(a,b) {
    return a+b;
}

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));
 */
/* //To solve the problem we use argument keyword which take all argument in function

function sum1(a,b) {
    let total = 0;
    for(let value of arguments) {
        total = total + value;
    }
    return total;
}

let result = sum1(1,2,3,4,5);
console.log(result); */

/* // Rest Operator

function sum(num , value, ...args) {//We can't write after using rest operator
    console.log(num,value);
    console.log(args);
}

sum(1,23,4,4,5,6,6); */


/* //Default Parameters

function income(a=1/21,b=21,c=231){
    return a*b*c;
}

console.log(income()); */


/* //Getters and Setters

let person = {
    fName: 'V',
    lName: 'S',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        if(typeof value !== String) {
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    },
} */


// person.fullName = 'Rahul Kumar';

// console.log(person.fullName);
// console.log(person.fullName());//Error : since getters and setters are not funcitons


/*  //Try and Catch

 try{
    person.fullName = 21 ;
 }
 catch(e) {
    alert(e);
 }

 console.log(person.fullName); */

//reduce method

let arr = [1,2,3,4];

// let total = 0;
// 
// for(let value of arr){
    // total = total + value;
// }
// 
// console.log(total); 


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// accumutaor is working as 'total' and currentValue is working as 'Value' 
console.log("PRINTING TOTAL SUM:");
console.log(totalSum);

