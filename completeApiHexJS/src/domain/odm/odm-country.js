const conn = require("../repositories/mongo.repository");

exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.Country.find();
  } catch (error) {
    console.log("err odm-country.getAll =", error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (object, bandera) => {
  try {
    const data = await new conn.db.connMongo.Country({
      numero: object.numero,
      nombre: object.nombre,
      bandera: bandera,
      estatus: object.estatus,
      area: object.area,
      poblacion: object.poblacion,
      ciudades: object.ciudades ? [...object.ciudades] : [],
      capital: object.capital,
      frontera: object.frontera,
    });
    data.save();
    return true;
  } catch (error) {
    console.log("err odm-country.Create =", error);
    return await { err: { code: 123, message: error } };
  }
};
exports.PutImage = async (numero, bandera) => {
  try {
    await conn.db.connMongo.Country.findOneAndUpdate(
      { numero: numero },
      { bandera: bandera },
      {
        new: true,
      }
    );
    return true;
  } catch (error) {
    console.log("err odm-country.PutImage =", error);
    return await { err: { code: 123, message: error } };
  }
};
