const config = require("config-yml");
const server = require("./src/server");
const magic = require("./src/utils/magic");
const { configCloudinary } = require("./src/middlewares/files.middleware");

configCloudinary();
server.listen(config.port, () => {
  magic.LogInfo(`Server running on http://localhost:${config.port}`);
});

server.on("error", (err) => {
  magic.LogDanger(err);
});
