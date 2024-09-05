// const chalk = require('chalk')
// import validator from 'validator';

// console.log(chalk.red('This is red text'));
// console.log(chalk.green('This is green text'));
// console.log(chalk.yellow('This is yellow text'));
// import chalk from 'chalk';
// 
// console.log(chalk.blue('Hello World!'));
// 


import chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.blue.underline('Hello World!'));
console.log(chalk.blue('Hello World!'));
console.log(chalk.red('This is red text'));
console.log(chalk.green('This is green text'));
console.log(chalk.yellow.inverse('This is yellow text'));
console.log(chalk.bgBlue('This text has a blue background'));
console.log(chalk.bgRed('This text has a red background'));
console.log(chalk.blue.bgYellow.bold('This text is bold, blue, with a yellow background'));
console.log(chalk.green.underline('This text is green and underlined'));
console.log(chalk.red('This is a red ' + chalk.blue('blue text') + ' in red text'));
console.log(chalk`
  {red.bold This is bold red text}
  {green.underline This is underlined green text}
  {blue.bgYellow.bold This is bold blue text with a yellow background}
`);
  


const email = 'test@examplecm';
const url = 'https://www.example.com';
const str = 'abc123';
const num = '12345';
let dirtyString = '   Hello World!   ';

console.log(`Is valid email: ${validator.isEmail(email)}`); // true
console.log(`Is valid URL: ${validator.isURL(url)}`); // true
console.log(`Is alphanumeric: ${validator.isAlphanumeric(str)}`); // true
console.log(`Is numeric: ${validator.isNumeric(num)}`); // true



let cleanString = validator.trim(dirtyString);
console.log(`Cleaned string: '${cleanString}'`); // 'Hello World!'
