const fs = require('fs')

// fs.writeFile("async.txt","Hi , i am vaibhav ", (err) => {
//     if(err) {
//         console.log(err);
//     }
// })

// Async Functions : we pass them a function as an argument - a callback 
// that fets call when that task completes.
// The callback has an argument that tells you whether 
// the operation completed successfully
// Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing) , and start checking the error



// fs.appendFile("async.txt","\nToday we will learn about Async functions",(err) => {
    // if(err){
        // console.log(err);
    // }
// })

fs.readFile('async.txt','utf-8',(err,data) => {
    console.log(data);
})

//We should always use Async fucntions instead of Syn functions 
//because if Sync functions is going to take 10 seconds to execute 
//it will not execute next statement while executing itself and this is a problem
//but async functions doesnot do that they execute next statement if they are taking more time.
