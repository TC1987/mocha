module.exports = (function() {
    return {
        sanitize: function(word) {
            return word.toLowerCase().replace(/-/g, ' ');
        }
    }
})()
