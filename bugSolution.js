const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        // Simulate a successful request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        // Simulate an error, but now it's caught
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error handling request:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});