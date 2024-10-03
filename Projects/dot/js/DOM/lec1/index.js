/* Window : Global object created by browser to open browser window 
DOM , BOM and JS Core functionalities are lies in Window

DOM(Document Object Model) : when we convert complete webpage into js obj it is called dom
This is hirerical , ch
HTML code is set of characters, these charaters converted into tags which further are converted into tokens and tokens are converted into nodes and nodes get altogether to make a DOM 
ex: 'document' gives whole html code , 'document.body' gives body of html code.

BOM(Browser Object Model) : helps to communicate with browser.
*/


//getElementsById : it is a method
document.getElementById('home');

//It is called on document object
//It return a single object


//getElementsByClassName
document.getElementsByClassName('home');//Can return mutiple objects

//getElementByTagName
document.getElementsByTagName('div');//Can return mutiple objects

// list return is not an array in tag and className method


//Trick :
//If we highlight any section , image ,text in a webpage and do inspect we can see their class or block of code of highlighted object by 
//simply writing $0 .We can write $0.ClassName etc to find specific information about that section of webpage.Also for example if we highlight a para in webpage we can do let para = $0 and write para to see paragraph


/* querySelector() 
//Another way to get elements from html code is using querySelector()

// ex : querySelector(#header) : to get an Id
// querySelector(.header) : to get a class 
// querySelector('header') : to get a tag
// querySelectorAll('.header') : to get multiple elements
// We can use let keyword for ease

 */

/* Update Existing Content: 

ex: let homeId = document.querySelector('home);
    document.homeId;//to get home tag
    document.homeId = ' '; //to empty the code ini home tag
    document.homeId = 'vaibhav';/to write text


.innerHTML : get/set HTML content

let list = document.querySelector('#list');
console.log(list.innerHTML);


.outerHTML : H/W

.textcontent : mostly gives text, the main difference in textconetent and innerHTML is that when we add some tag in html , innerHTML will render this tag but 
    .textcontent will treat this tag as text.

.innertext : the main difference in innertext and textContent is that innertext will not show text which is contained in display='hidden'
 */


/* Adding New Element / Content

//to create element we will use createElement. ex: let y = document.createElement('div')
//to add in content we will use appendChild method. ex : x.appendChild(y);

*/

/* Creating Text-Node
1st Way: 
let NewPara = document.createElement('p');
let textPara  = document.createTextNode('Vaibhav');

NewPara = appendChild(textPara);
x.appendChild(NewPara);

---------------------------------------------------------------

2nd Way(better): 
let myPara = document.createElement('p');
myPara.textContent = 'Vaibhav';
x.appendChild(myPara);

---------------------------------------------------------------

3rd Way
insertAdjacentHTML()
//it has two arguments : location, object(var)name

locations : beforebegin , beforeend , afterbegin , afterend

*/

/* Remove Elements

removeChild() : opposite of appendChild
ex: parentElement.removeChild(childElement)


    ex: document.body.removeChild(home);//To delete an Id
    document.body.classList.remove('home');//To delete a class
 2nd Way

 

*/


// Changes in CSS 
/* 
// let element = document.getElementById('thnku');
// element.style.color = '#f04208';
// element.style.backgroundColor = '#205060';

//For multiple changes
// element.style.cssText += "color : red; background-color :yellow; border:2px solid black;";
*/

/* setAttribute();
//To set properties : 
// element.setAttribute("style","color:red");
*/

/* To add class name
// console.log(element.className);
// console.log(typeof element.className);
// 
// element.className += ' superHead';
*/

/* To get class names as array list

console.log(element.classList);
console.log(typeof element.classList);

element.classList.add('superHead'); // add
element.classList.remove('superHead'); //remove

// toggle - if already then remove else add 

element.classList.toggle('superHead'); 

console.log(element.classList.contains('superHead')); //true
element.classList.toggle('superHead'); 
console.log(element.classList.contains('superHead')); //false
*/