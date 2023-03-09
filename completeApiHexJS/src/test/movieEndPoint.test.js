const request = require("supertest");
const app = require("../server");

describe("Post Country", () => {
  it("should create a new country", async () => {
    const res = await request(app)
      .post("/api/v1/countries/")
      .send({
        numero: -1,
        nombre: "España",
        bandera: "España.png",
        estatus: "Independiente",
        area: 2000,
        poblacion: 5000000,
        ciudades: [],
        frontera: { portugal: "jdfdfñlk", francia: "jhsdkjsd" },
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual("Success");
  });
});
describe("Post City", () => {
  it("should create a new show", async () => {
    const res = await request(app).post("/api/v1/cities/").send({
      numero: -1,
      nombre: "Sevilla",
      bandera: "sevilla.png",
      poblacion: 1500000,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual("Success");
  });
});
describe("get countries", () => {
  it("should get all countries", async () => {
    const res = await request(app).get("/api/v1/countries/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual("Success");
  });
});
describe("get cities", () => {
  it("should get all cities", async () => {
    const res = await request(app).get("/api/v1/cities/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual("Success");
  });
});
