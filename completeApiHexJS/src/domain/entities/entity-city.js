module.exports = (db) => {
  const citySchema = new db.Schema(
    {
      numero: { type: Number, required: true },
      nombre: { type: String, required: true, trim: true },
      bandera: { type: String, required: true },
      poblacion: { type: String },
    },
    {
      timestamps: {
        createdAt: "created",
        updatedAt: "updated",
      },
    }
  );
  return db.model("Cities", citySchema);
};
