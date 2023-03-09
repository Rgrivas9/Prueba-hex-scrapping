module.exports = (db) => {
  const countrySchema = new db.Schema(
    {
      numero: { type: Number, required: true },
      nombre: { type: String, required: true, trim: true },
      bandera: { type: String, required: true },
      estatus: { type: String, required: true },
      area: { type: Number },
      poblacion: { type: Number },
      ciudades: [{ type: db.Schema.Types.ObjectId, ref: "Cities" }],
      capital: [{ type: db.Schema.Types.ObjectId, ref: "Cities" }],
      frontera: [{ type: Object }],
    },
    {
      timestamps: {
        createdAt: "created",
        updatedAt: "updated",
      },
    }
  );
  return db.model("Countries", countrySchema);
};
