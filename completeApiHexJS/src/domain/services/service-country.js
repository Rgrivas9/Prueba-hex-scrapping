const magic = require("../../utils/magic");
const enum_ = require("../../utils/enum");
const odmCountry = require("../odm/odm-country");

exports.GetAll = async (req, res) => {
  let status = "Success",
    errorcode = "",
    message = "",
    data = "",
    statuscode = 0,
    response = {};
  try {
    let respOdm = await odmCountry.GetAll();
    if (respOdm.err) {
      (status = "Failure"),
        (errorcode = respOdm.err.code),
        (message = respOrm.err.messsage),
        (statuscode = enum_.CODE_BAD_REQUEST);
    } else {
      (message = "Success Response"),
        (data = respOdm),
        (statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log("err =", error);
    response = await magic.ResponseService(
      "Failure",
      enum_.CODE_INTERNAL_SERVER_ERROR,
      error,
      ""
    );
    return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(response);
  }
};

exports.Create = async (req, res) => {
  let status = "Success",
    errorcode = "",
    message = "",
    data = "",
    statuscode = 0,
    response = {};
  try {
    if (req.body) {
      const bandera = req.file ? req.file.path : "Not image found";
      let respOdm = await odmCountry.Create(req.body, bandera);
      if (respOdm.err) {
        (status = "Failure"),
          (errorcode = respOdm.err.code),
          (message = response.err.message),
          (statuscode = enum_.CODE_BAD_REQUEST);
      } else {
        (message = "Country Created"), (statuscode = enum_.CODE_CREATED);
      }
    } else {
      (status = "Failure"),
        (errorcode = enum_.CODE_IAM_A_TEAPOT),
        (message = "Fields are required"),
        (statuscode = enum_.CODE_BAD_REQUEST);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log("error =", error);
    return res
      .status(enum_.CODE_INTERNAL_SERVER_ERROR)
      .send(
        await magic.ResponseService(
          "Failure",
          enum_.CODE_BAD_REQUEST,
          "err",
          ""
        )
      );
  }
};
exports.PutImage = async (req, res) => {
  let status = "Success",
    errorcode = "",
    message = "",
    data = "",
    statuscode = 0,
    response = {};
  try {
    if (req.body) {
      const bandera = req.file ? req.file.path : "Not image found";
      const { numero } = req.params;
      let respOdm = await odmCountry.PutImage(numero, bandera);
      if (respOdm.err) {
        (status = "Failure"),
          (errorcode = respOdm.err.code),
          (message = response.err.message),
          (statuscode = enum_.CODE_BAD_REQUEST);
      } else {
        (message = "Country Modified"), (statuscode = enum_.CODE_CREATED);
      }
    } else {
      (status = "Failure"),
        (errorcode = enum_.CODE_IAM_A_TEAPOT),
        (message = "Fields are required"),
        (statuscode = enum_.CODE_BAD_REQUEST);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log("error =", error);
    return res
      .status(enum_.CODE_INTERNAL_SERVER_ERROR)
      .send(
        await magic.ResponseService(
          "Failure",
          enum_.CODE_BAD_REQUEST,
          "err",
          ""
        )
      );
  }
};
