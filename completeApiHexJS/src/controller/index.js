const express = require("express");
const router = express.Router();
const countries = require("../domain/services/service-country");
const cities = require("../domain/services/service-city");
const { upload } = require("../middlewares/files.middleware");

router.get("/countries", countries.GetAll);
router.post("/countries", upload.single("bandera"), countries.Create);
router.put("/countries/:numero", upload.single("bandera"), countries.PutImage)
router.get("/cities", cities.GetAll);
router.post("/cities", upload.single("bandera"), cities.Create);

module.exports = router;
