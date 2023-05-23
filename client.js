const net = require("net");
const {  IP, PORT, GET_CONTROLS, SUCCESS_MSG, PLAYER } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log(SUCCESS_MSG);
    conn.write(PLAYER);
    conn.write(GET_CONTROLS.w);
  });

  conn.on("data", (data) => {
    // interpret incoming data as text
    console.log(data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;