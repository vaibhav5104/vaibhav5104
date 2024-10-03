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

let arr = [1,2,3,4,5];

console.log(typeof(arr));//array in js are objects

// console.log(rectangle);
// console.log(rectangle.draw());

//factory funciton : Factory Function is a fucntion which produces objects when we called it

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

let nums = {

    a:12,
    b:122
};

let dest = {};

for(let key in nums){
    // console.log(key,nums[key])
    dest[key] = nums[key];
}

console.log(nums);
console.log(dest);