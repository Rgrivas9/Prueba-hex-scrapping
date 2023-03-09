const config = require("config-yml");
const mongoose = require("mongoose");
const magic = require("../../utils/magic");
const country = require("../entities/entity-country");
const city = require("../entities/entity-city");
const dotenv = require("dotenv");

dotenv.config();

let db = {};

if (config.db.mongodb && config.db.mongodb.length > 0) {
  config.db.mongodb.map((c) => {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db[c.nameconn] = {};
    db[c.nameconn].conn = mongoose;
    db[c.nameconn].Country = country(mongoose);
    db[c.nameconn].City = city(mongoose);
  });
  exports.db = db;
  magic.LogInfo("Conectado a la base de datos");
} else {
  magic.LogDanger("No existe la base de datos");
}
