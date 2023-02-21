//Creating the Client

const net = require("net");

const config = {
  host: "localhost", // change to IP address of computer, more on that below
  port: 3000,
}

const conn = net.createConnection(config);

conn.setEncoding("utf8"); // interpret data as text

//Handling Data
  //let's receive this welcome greeting (data) and, for now, simply print it out to the screen, in order to confirm that it's being received.
  //data = message from the server
conn.on("data", (data) => {
  console.log("Server says: ", data);
});

//Client Can Send a Reply

conn.on("connect", () => {
  conn.write("Hello from client!");
})



