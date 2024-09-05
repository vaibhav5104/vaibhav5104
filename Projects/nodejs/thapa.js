const fs = require('fs')

fs.writeFileSync('bio.txt' , 'I am vaibhav')

fs.appendFileSync('bio.txt', '\nI live in Jalandar')

const data = fs.readFileSync("bio.txt", "utf8");
console.log(data);

/* // if you use async function you will have to use a callback funcition 


  const data = fs.readFileSync("bio.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });


*/

fs.renameSync('bio.txt' , 'mybio.txt')

// fs.rmSync('mybio.txt')

