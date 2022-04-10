// Necessary Functions
function coinFlip() {
  var a = Math.floor(Math.random() * 10) + 1;
  if (a <= 5){
    return "heads";
  }
  else{
    return "tails";
  }
}

function flipACoin(call) {
  var flipResult = coinFlip();
  var returnDict = {"call": call, "flip": flipResult, "result": ""};
  var resultOfCall = "lose";
  if (call == flipResult){
    resultOfCall = "win";
  }
  returnDict["result"] = resultOfCall;
  return returnDict;
}

function coinFlips(flips=1) {
  var a = [];
  for (let x = 0; x < flips; x++) {
    a.push(coinFlip());
  }
  return a;
}

function countFlips(array) {
  var a = Array.from(array);
  var counts = {"heads": 0, "tails": 0}
  for (let x = 0; x < array.length; x++) {
    if (a.pop() == "heads"){
      counts["heads"]+=1;
    }
    else{
      counts["tails"]+=1;
    }
  }
  return counts;
}

function flipAHead(call) {
  var flipResult = "heads";
  var returnDict = {"call": call, "flip": flipResult, "result": ""};
  var resultOfCall = "lose";
  if (call == flipResult){
    resultOfCall = "win";
  }
  returnDict["result"] = resultOfCall;
  return returnDict;
}

function flipATail(call) {
  var flipResult = "tails";
  var returnDict = {"call": call, "flip": flipResult, "result": ""};
  var resultOfCall = "lose";
  if (call == flipResult){
    resultOfCall = "win";
  }
  returnDict["result"] = resultOfCall;
  return returnDict;
}

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
var server = app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

app.get("/app", (req, res) => {
  res.status(200).end("API Works")
  res.type("text/plain")
})

app.get("/app/flip/", (req,res) => {
  res.status(200).json({"flip":coinFlip()})
})

/*Endpoint /app/flips/:number that returns JSON including an array of the raw random flips and a summary. Example below.
Endpoint /app/flip/call/heads that returns the result of a random flip match against heads as JSON.
Endpoint /app/flip/call/tails that returns the result of a random flip match against tails as JSON.
*/

app.get("/app/echo/:number", (req, res) => {
  res.status(200).json({"message": req.params.number})
})

app.get("/app/flips/:number/", (req,res) =>{
  var a = coinFlips(req.params.number)
  res.status(200).json({"raw":a, "summary":countFlips(a)})
})

app.get("/app/flip/call/heads/", (req,res) =>{
  res.status(200).json(flipACoin("heads"))
})

app.get("/app/flip/call/tails/", (req,res) =>{
  res.status(200).json(flipACoin("tails"))
})

app.use(function(req,res) {
  res.status(404).end("Endpoint does not exist")
  res.type("text/plain")

})