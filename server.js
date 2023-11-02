const http = require('http');
const {createfun,readfun,updatefun,deletefun} = require("./newmodule.js")

// Create an HTTP server
const server = http.createServer((req, res) => {
    console.log(req.method,req.url)

    if(req.url == "/create" && request.method == "POST"){
        res.write(JSON.stringify(createfun(10)))
    }
    else if(req.url=="/read" && request.method == "GET"){
        res.write(JSON.stringify(readfun()))
    }
    else if(req.url=="/update"){
      res.write(JSON.stringify(updatefun(0,100)))
    }
    else if(req.url=="/del"){
      res.write(JSON.stringify(deletefun(0)))
    }
    else{
        res.write("service not available")
    }
  // Set the response headers
  // res.write('Response looks good');

  // Send a response
  res.end(' Hello World!\n');
});

// Listen on a specific port and host
const port = 5000;
const host = '127.0.0.1';

server.listen(port,function() {
  console.log(`Server is running at http://${host}:${port}/`);
});