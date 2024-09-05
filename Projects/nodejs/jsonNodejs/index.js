const { json } = require("stream/consumers")
const fs = require('fs')

const bioData  = { 
    name : "Vaibhav",
    age: 20,

 }

//  console.log(bioData.age);

//  const jsonData = JSON.stringify(bioData) // object to JSON
//  console.log(jsonData);

// const objData = JSON.parse(jsonData) // JSON to object
// console.log(objData);

//Task : 
// convert to JSON
// add JSON data into another file
// readfile
// again convert back to js obj ori
// console.log()


const jsondata = JSON.stringify(bioData)

fs.writeFile("data.jaon",jsondata,(err) => {if(err) console.log(err);})

fs.readFile("data.json","utf-8",(err,data) => {
    const orgData = JSON.parse(data)
    console.log(data)
    console.log(orgData)
})

