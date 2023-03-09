const conn = require("../repositories/mongo.repository");

exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.City.find();
  } catch (error) {
    console.log("err odm-city.getAll =", error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (object, bandera) => {
  try {
    const data = await new conn.db.connMongo.City({
      numero: object.numero,
      nombre: object.nombre,
      bandera: bandera,
      poblacion: object.poblacion,
    });
    data.save();
    return true;
  } catch (error) {
    console.log("err odm-city.Create =", error);
    return await { err: { code: 123, message: error } };
  }
};
