// Using module pattern to export an IIFE to provide privacy and state (closure)
// to variables and methods contained within it.

module.exports = (function() {
    return {
        sanitize: function(word) {
            return word.toLowerCase().replace(/-/g, ' ');
        },
        tokenize: function(sentence) {
            return sentence.split(' ');
        },
        info: function(callback) {
            var https = require('https'),
                options = {
                    hostname: 'api.github.com',
                    path: '/repos/sayanee/build-podcast',
                    method: 'GET',
                    headers: {
                        'User-Agent': 'sayanee'
                    }
                };

            var str = '';

            https.request(options, function(response) {
                response.on('data', function(data) {
                    console.log('I run first.');
                    // This method gets called multiple times depending on the size of
                    // the data getting returned back from the API.
                    // console.log('data: ' + data);
                    str += data;
                })

                response.on('end', function() {
                    console.log('I run second.');
                    callback(JSON.parse(str));
                })

                response.on('error', function() {
                    console.log(error);
                    callback(error);
                })
            })
            .end();
        }
    }
})()
