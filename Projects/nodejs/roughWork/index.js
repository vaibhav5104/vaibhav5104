const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {

    const data = fs.readFileSync("data.json","utf-8")
    const objdata = JSON.parse(data)

    if(req.url == "/") {
        res.end(`<h1>${objdata.techS.development.webDev}</h1>`)
    }else if(req.url == "/techS/development/ML"){
        res.end(`<h1>${objdata.techS.development.ML}</h1>`)
    }else{
        res.writeHead(200)
        res.end("404 error , Page is not found")
    }

})

server.listen(8000, () => {
    console.log('listening to the port no. 8000');
});