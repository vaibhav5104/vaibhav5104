// Eventtarget is an interface and a top level entity which has three methods : 
// i. addEventListener() ii. removeEventListener iii. dispatchEvent()
// Properties of Eventtarget is inhereted by Node and further inhereted by Element


// i. addEventListener - We can listen/respond/hoook into event

// syntex : <event-target>.addEventListener(<event-to-Listen-for> , <function-to-run-when-event-happened)


// There are three phases in an Event : Capturing phase , At target phase , Bubbling phase

// So called compiler go line by line from html tag to <event-target> , this phase called capturing phase and when it reaches the <event-target > it called At-target phase
// and then it goes back to html tag line by line and it called bubbling phase.

// Note : addEventListener execute as default at Bubbling-phase

// If we write true as third argument in addEventListener it will execute at capturing phase


// H.W - can we execute this method in at target


// removeEvent : 

// The event Object - ex : document.addEventListener('click',function(boy){
    //                     console.log(boy))});
    // here boy is an event object


/* preventDefault():
// The default Action : ex : default acation of anchor tag is to create a creates a hyperlink.
// We can prevent default action of any tag by using event.preventDefault() method

// ex : let links = document.querySelector('a');
//      links.addEventListener('click' , function(event) {
//      event.preventDefault();
//      console.log('Wow');
// });
 */

// create 100 paragraphs and apply on it events
// for(let  i = 1; i <= 100; i++)
// {
//     let paragraph = document.createElement('p');

//     let content = document.createTextNode(`This is ${i} paragraph`);

//     paragraph.appendChild(content);

//     paragraph.addEventListener('click', function(){
//         alert(`This is ${i} paragraph Clicked`);
//     })
//     document.body.appendChild(paragraph);
// }

let parentDiv = document.querySelector('button');
parentDiv.addEventListener("click", function (event) {
    alert(event.target.textContent);
  
});
// for (let i = 1; i <= 100; i++) {
//   let paragraph = document.createElement("p");

//   let content = document.createTextNode(`This is ${i} paragraph`);

//   paragraph.appendChild(content);
//   parentDiv.appendChild(paragraph);
// }

document.body.appendChild(parentDiv);