//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.year = input;
};

Year.prototype.isLeap = function() {

  console.log(this.year)


  if (this.year % 4 === 0) {
    if (this.year % 100 === 0) {
      if (this.year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }

  return false;

};

module.exports = Year;
