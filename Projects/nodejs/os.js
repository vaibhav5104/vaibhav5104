const os = require('os')

const freeMem = os.freemem()
const totalMem = os.totalmem()
const upTime = os.uptime()

console.log(os.version());
console.log(`${freeMem/1024/1024/1024}`);
console.log(`${totalMem/1024/1024/1024}`);
console.log(os.userInfo());
console.log(os.hostname());
console.log(`${upTime/60}`);