const {Router} = require("express");
const fs = require("fs");
const mainRouter = Router();
const {
  saludarController,
  tortugasController,
  gatitoController,
  usersController,
  detailController,
  createController,
} = require("../controllers/index");

mainRouter.get("/", saludarController);

mainRouter.get("/tortugas", tortugasController);

mainRouter.get("/gatito", gatitoController);
// QUERY  ?
mainRouter.get("/users", usersController);
// PARAMS   /:
mainRouter.get("/users/:id", detailController);
// BODY (solo post y put)
mainRouter.post("/users", createController);

module.exports = mainRouter;
