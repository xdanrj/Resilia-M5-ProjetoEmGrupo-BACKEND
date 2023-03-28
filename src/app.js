import express from "express";

import cors from 'cors'

import clientesController from "./controllers/clientesController.js";
import filiaisController from "./controllers/filiaisController.js";
import fornecedoresController from "./controllers/fornecedoresController.js";
import produtosController from "./controllers/produtosController.js";
import vendedoresController from "./controllers/vendedoresController.js";

const app = express()

app.use(express.json())

app.use(cors())

    app.get("/testedeploy", (req, res) => {
      res.status(200).send({msg: "Api sendo acessada remotamente"});
    });



clientesController(app)
filiaisController(app)
fornecedoresController(app)
produtosController(app)
vendedoresController(app)


export default app