const path = require('path')

const dir = path.dirname('/home/vaibhav5104/Projects/nodejs/path.js')
const ext = path.extname('/home/vaibhav5104/Projects/nodejs/path.js')
const basename = path.basename('/home/vaibhav5104/Projects/nodejs/path.js')
const parse = path.parse('/home/vaibhav5104/Projects/nodejs/path.js')



console.log(dir);
console.log(ext);
console.log(basename);
console.log(parse);
console.log(parse.name);