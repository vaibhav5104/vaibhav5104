
// we useally write the code like : 

/* 
const add = (a,b) => {
    return a+b;
};

const sub = (a,b) => {
    return b-a;
};

const mult = (a,b) => {
    return b*a;
};

const name = "Vaibhav"

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

module.exports = {add,sub,mult,name}
 */

// But js makes it like below to execute : concept name is IIFE

/* 

(function (exports,require,module,__filename,__dirname){
    
/* 
const add = (a,b) => {
    return a+b;
};

const sub = (a,b) => {
    return b-a;
};

const mult = (a,b) => {
    return b*a;
};

const name = "Vaibhav"

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

module.exports = {add,sub,mult,name}



})

*/