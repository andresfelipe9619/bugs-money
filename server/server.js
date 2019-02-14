// const https = require('https');
const http = require('http');
const app = require('./app');
// const path = require('path');
// const fs = require('fs');
const PORT = process.env.PORT;
// const certOptions = {
//   key: fs.readFileSync(path.resolve('cert/server.key')),
//   cert: fs.readFileSync(path.resolve('cert/server.crt')),
// };
const server = http.createServer(app);

server.listen(PORT, (err) => {
  err
    ? console.log(`Cannot coonect to the port ${PORT} with error ${err}`)
    : console.log(`Connected to port ${PORT} succesfully`);
});
