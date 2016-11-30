// Using module pattern to export an IIFE to provide privacy and state (closure)
// to variables and methods contained within it.

module.exports = (function() {
    return {
        sanitize: function(word) {
            return word.toLowerCase().replace(/-/g, ' ');
        }
    }
})()
