// Write simple .camelCase prototype method for strings. All words must have their first letter capitalized without spaces.
// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// my solution

String.prototype.camelCase = function() {
    var newCamel = this.split(" ");
    newCamel = newCamel.map(function(e) {
      return e.charAt(0).toUpperCase() + e.substr(1);
    })
    return newCamel.join("");
}
