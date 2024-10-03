// Object creation

/* 
let rectangle = {
    length : 23,
    bredth : 23,

    draw: function() {
        console.log(234);
    }

};
 */

// console.log(rectangle);
// console.log(rectangle.draw());

//factory funciton
/* 
function createRectangle (len,bre) {

let rectangle = {
    length : len,
    bredth : bre,

    draw: function() {
        return 23;
    }

};

return rectangle;

}

let rectangleobj1 = createRectangle(5 , 4);

console.log(rectangleobj1);
console.log(createRectangle());
console.log(createRectangle.rectangle.draw);
 */

// constructor function

// function Rectangle() {

//     this.length = 1;
//     this.bredth = 2;

//     this.draw = function() {
//         console.log('draw');
//         return 1;
//     }
// }

// // object creation using constructor function
// let rectangleObject = new Rectangle();

// console.log(rectangleObject);
// console.log(rectangleObject.draw());

/* let nums = {

    a:12,
    b:122
};

let dest = {};

for(let key in nums){
    // console.log(key,nums[key])
    dest[key] = nums[key];
}

console.log(nums);
console.log(dest); */

/* ************************************************************************** */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
/* 
let lastName = new String('sharma');//object string

console.log(lastName);
console.log(typeof(lastName));

let firstName = 'Vaibhav';//Primitive String
console.log(firstName);
console.log(typeof(firstName));
//But if we use dot operator '.' in primitive string ,It will work as Object String.

firstName.includes('Va');//true
let result1 = firstName.length;
console.log(result1);

let result2 = firstName.toUpperCase();
let result3 = firstName.toLowerCase();
console.log(result2);

let result4 = firstName.replace('Vaibh' , 'An');
console.log(result4);

let message = 'This is my first messsage';

let words = message.split(' ');

console.log(words);//[ 'This', 'is', 'my', 'first', 'messsage' ]

let message2 = `Hello ${firstName + lastName}
Nice to meet you
Regards
Js`;
console.log(message2);

//Date

let date = new Date();
let date2 = new Date('January 5 2004');//see in console
let date3 = new Date(2004 , 0 , 5 , 8);//see in console

console.log(date3);

date3.setMilliseconds(34);
console.log(date3);

let hour = date3.getMilliseconds();
console.log(hour); 
*/

//Arrays

/* let numbers = [1,4,5,7];

console.log(numbers);

// numbers.push(23);
// numbers.pop(3);
// numbers.splice(0,4,'q','w');
// numbers.unshift(12); */

/* //Searching

console.log(numbers.indexOf(3));

//we want to check if a number exist in an array
if (numbers.indexOf(4) != -1) {
    console.log("present");
}

console.log(numbers.includes(7));

console.log(numbers.includes(4,2));//Searching of 4 which starts from indedx 2.
 */

// Array of Refrences

/* 
let courses = [
    {no:1 , naam:'Love'},
    {no:2 , naam:'Babbar'}
];

// console.log(courses);

// console.log(courses.indexOf({no:1 , naam:'Love'}));
// console.log(courses.includes({no:1 , naam:'Love'}));
// console.log(courses.length);


let course = courses.find(function(courses) {
    return courses.naam == 'Love';
});
console.log(course); */

/* //arrow function
//In arrow function if we have only one param there's no need of brackets'()' and if there is only one statement then there is no need of curly brackets.
//and we replace funtion keyword with '=>'

let course2 = courses.find(courses => courses.naam == 'asd');
console.log(course2);
if (course2 == undefined) {
    console.log('naam Not found');
} */

/* //Removing element

//from end -> pop()

numbers.pop();

console.log(numbers);


//from beginning -> shift()
numbers.shift();
console.log(numbers);


//from middle -> splice()

numbers.splice(0,2);
console.log(numbers);
 */

/* //Emptying the Array

let numbers2 = numbers;

// numbers = [];//Not the best way to empty an array since copied arrray will not empty.
// better ways are to use length , splice methods or use pull() in a loop

// numbers.length = 0;
// numbers.splice(0 , 4);
  
// console.log(numbers);
// console.log(numbers2); */

/* //Combining and slicing arrays

let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);

// let sliced = combined.slice(2,5);//first index is included but second index is excluded 
// let sliced = combined.slice(2);
// let sliced = combined.slice();
// console.log(sliced);

//using spread operator

let combined2 = [...first,'b',...second,'a'];
let combined3 = [...combined2];//We can also copy 
console.log(combined2);
 */

/* // combining and slicing the objects
let num1 = {
    first : [1,2,3,4,5]
};

let num2 = {
    second: [6,7,8,9,10]
};
// let combined = num1.first.concat(num2.second);
let combined = [...num1.first,...num2.second];
console.log(combined); */

// Iterating an Array
// let arr = [10,20,30,40,50];

/* // for-of loop


for (let value of arr) {
    console.log(value);
} */

/* //for-Each loop

arr.forEach(number => console.log(++number)); */


/* //Join and split an array

const joined = arr.join('->');

console.log(joined);

let message = 'This is my first message';
let parts = message.split(' ');

console.log(parts);

const joined1 = parts.join('->');
console.log(joined1);

let numbers = [2,3,1,6,5]; */

/* //Sort and reverse method

let sorts = numbers.sort();
console.log(sorts);
let reverses = numbers.reverse();
console.log(reverses); */

/* //Filter method

let filtered = numbers.filter(function(value) {
    return value >= 0;
});

//arrow function

let filtered1 = numbers.filter(value => value >2);

console.log(filtered1); */

/* // map method

let numbers = [1,2,3,-4,-6];

let filtered = numbers.filter(value => value>= 0);

// let items = filtered.map(function(num) {
    // return {value: num};
// })

// let items = filtered.map(num => {value: num});
// console.log(items);

//chaining

let items = numbers
            .filter(value => value > 0)
            .map(num => {value: num});
            console.log(items); */



            