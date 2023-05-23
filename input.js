const { GET_CONTROLS, GET_RANDOM_CONTROLS } = require("./constants");

let connection;

// function to setup input
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // function to handle user input
  const handleUserInput = function (data) {

    if (data === "\u0003") {
      process.exit();
    }

    if (data.trim().toLowerCase() === "w") {
      connection.write(GET_CONTROLS.w);
    }

    if (data.trim().toLowerCase() === "a") {
      connection.write(GET_CONTROLS.a);
    }

    if (data.trim().toLowerCase() === "s") {
      connection.write(GET_CONTROLS.s);
    }

    if (data.trim().toLowerCase() === "d") {
      connection.write(GET_CONTROLS.d);
    }

    if (data.trim().toLowerCase() === "m") {
      conn.write(GET_RANDOM_CONTROLS.m);
    }

    if (data.trim().toLowerCase() === "p") {
      conn.write(GET_RANDOM_CONTROLS.p);
    }

    if (data.trim().toLowerCase() === "i") {
      conn.write(GET_RANDOM_CONTROLS.i);
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;