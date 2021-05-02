const http = require('http');

const server = http.createServer(function(req, res) {
        res.writeHead(200, {'content-Type' : 'application/json'});
        res.end(`
        {
            'name': 'Dolapo',
            'country' : 'Nigeria',
            'Hobby' : 'coding'
        }
        `);
    });


server.listen(3000);

console.log('Listening on port 3000...');