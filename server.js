// Require http module
const http = require('http')
// Require fs module
const fs = require('fs')

const express = require('express')
const app = express()
// Require minimist module (make sure you install this one via npm).
const args = require("minimist")(process.argv.slice(2))
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
args["port"]
// Define allowed argument name 'port'.
const port = args.port || process.env.PORT || 3000
// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.

// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./www/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.
server.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

app.use(function(req,res) {
  res.status(404).end("Endpoint does not exist")
  res.type("text/plain")

})