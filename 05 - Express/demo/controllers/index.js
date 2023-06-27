const saludarController = (req, res) => {
  res.status(200).send("hola coleguillas");
};

const tortugasController = (req, res) => {
  const html = fs.readFileSync(__dirname + "/index.html");
  res.setHeader("content-type", "text/html");
  res.status(200).send(html);
};

const gatitoController = (req, res) => {
  const obj = {nombre: "Bartolomiau", alias: "pompitas"};
  res.status(200).json(obj);
};

const usersController = (req, res) => {
  // buscar por nombre
  const {name, especie} = req.query;
  if (name)
    return res
      .status(200)
      .send(`Recibi el nombre de ${name} y es un ${especie}`);

  res.status(200).send("Aqui estan todos los usuarios");
};

const detailController = (req, res) => {
  const {id} = req.params;
  res.status(200).send(`Aqui esta el usuario ${id}`);
};

const createController = (req, res) => {
  const {nombre} = req.body;

  res.status(200).send(`Agregando al usuario ${nombre}`);
};

module.exports = {
  saludarController,
  createController,
  gatitoController,
  tortugasController,
  usersController,
  detailController,
};
