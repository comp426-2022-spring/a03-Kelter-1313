/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  var a = Math.floor(Math.random() * 10) + 1;
  if (a <= 5){
    return "heads";
  }
  else{
    return "tails";
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips=1) {
  var a = [];
  for (let x = 0; x < flips; x++) {
    a.push(coinFlip());
  }
  return a;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

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

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

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
/** Export 
 * 
 * Export all of your named functions
*/

export {coinFlip, coinFlips, countFlips, flipACoin, flipAHead, flipATail};