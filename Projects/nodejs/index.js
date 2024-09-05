const fs = require("fs")

// creating a new file
// fs.writeFileSync('read.txt', "this is text file")

// fs.writeFileSync('read.txt', "Hi , this is text file")


// fs.appendFileSync('read.txt' , "\ntext file can be appended by appendFileSync")


const buf_data = fs.readFileSync("read.txt")
// console.log(buf_data);

//Node.js includes an additional data type called buffer
// (not available in browser's Javascript)
// Buffer is mainly used to store binary data.
// while reading from a file or recieving packets over the network

{/* <Buffer 48 69 20 2c 20 74 68 69 73 20 69 73 20 74 65 78 74 20 66 69 6c 65 0a 74 65 78 74 20 66 69 6c 65 20 63 61 6e 20 62 65 20 61 70 70 65 6e 64 65 64 20 62 ... 60 more bytes> */}


org_data = buf_data.toString()
// console.log(org_data);

/* 
// To read a file without getting buffer 

const data = fs.readFileSync("bio.txt", "utf8");
*/

/* // if you use async function you will have to use a callback funciton 


  const data = fs.readFileSync("bio.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
*/


//renaming the file
fs.renameSync("read.txt", "readwrite.txt")
 
// remove the file
fs.rmSync('readwrite.txt')

//remove the whole dir
fs.rmdirSync('desktopp')

