const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("data", (data) => {
    // interpret incoming data as text
    console.log(data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;