var cows = require('cows');

module.exports = function(cowNumber) {
  var all = cows();
  return all[cowNumber-1];
}
