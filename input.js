let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (data) {
    // your code here
    if (data === "\u0003") {
      process.exit();
    }

    if (data.trim().toLowerCase() === "w") {
      connection.write("Move: up");
    }

    if (data.trim().toLowerCase() === "a") {
      connection.write("Move: left");
    }

    if (data.trim().toLowerCase() === "s") {
      connection.write("Move: down");
    }

    if (data.trim().toLowerCase() === "d") {
      connection.write("Move: right");
    }

    if (data.trim().toLowerCase() === "m") {
      conn.write("Say: Hello");
    }

    if (data.trim().toLowerCase() === "p") {
      conn.write("Say: Awesome");
    }

    if (data.trim().toLowerCase() === "i") {
      conn.write("Say: Good game");
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;