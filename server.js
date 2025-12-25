const http = require("http");
const fs = require("fs")
const path = require("path")
const port = 3000;

const server = http.createServer((req, res) => {
    let filepath = "";
    let code = 200;

    if (req.url === "/home") {
        filepath = path.join(__dirname, "Home.html")
    }
    else if (req.url === "/contact") {
        filepath = path.join(__dirname, "Contact.html")
    }
    else if (req.url === "/about") {
        filepath = path.join(__dirname, "About.html")
    }
    else{
        filepath = path.join(__dirname, "Error.html")
    }


    fs.readFile(filepath, (err, data) => {
        res.writeHead(code, { "content-type": "text/html" })
        res.end(data)
    })
})


server.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})