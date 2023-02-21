//Creating a Server

const net = require('net');

const server = net.createServer();

const port = 3000;

//create an array to hold ALL of our connections objects
const connections = [];

server.listen(port, () => {
console.log(`Server listening on port ${port}!`);
});

//add this connection to our group of connections



//Detecting & Handling Connections On Server
  //add in the following code to detect a new client connection, and immediately send the client a greeting upon connection.

  server.on("connection", (client) => {
    console.log("New client connected!");
    client.write("Hello there!");

      //Receiving Data From Clients

  client.setEncoding("utf8"); // interpret data as text
  client.on("data", (data) => {
  console.log("Message from client: ", data);
});
  });



