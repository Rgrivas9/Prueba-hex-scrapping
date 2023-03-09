/* numero: { type: Number, required: true },
      nombre: { type: String, required: true, trim: true },
      bandera: { type: String, required: true },
      estatus: { type: String, required: true },
      area: { type: Number },
      poblacion: { type: Number },
      ciudades: [{ type: db.Schema.Types.ObjectId, ref: "Cities" }],
      capital: [{ type: db.Schema.Types.ObjectId, ref: "Cities" }],
      frontera: [{ type: Object }], */

const countries = require("./countries.json");
const fs = require("fs");

const finalCountries = [];
const list = [];
const nombres = [];
let number = 0;
for (const country of countries) {
  const name = country.country.replaceAll(" ", "").toLowerCase();
  const noAcc = name
    .replaceAll("á", "a")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ú", "u");
  const countryToPush = {
    nombre: country.country,
    bandera: `C:\\Users\\rafae\\Desktop\\BackendPractise\\01.flagsscraping\\img\\${noAcc}.png`,
    estatus: "independiente",
    area: parseInt(country.area),
    poblacion: parseInt(country.population),
    ciudades: [],
    capital: [],
    frontera: [],
    orden: noAcc
  };
  nombres.push(noAcc);
  list.push(countryToPush);
}
for (const nombre of nombres.sort()) {
  number++;
  finalCountries.push({
    ...list.find((pais) => pais.orden == nombre),
    numero: number,
  });
}
for (const pais of finalCountries) {
  delete pais.orden
}
const jsonCountries = JSON.stringify(finalCountries);
fs.writeFile("finalCountries.json", jsonCountries, () => {
  console.log("Created 💚💚");
});
