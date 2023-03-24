import clientesModel from "../models/clientesModel.js";
import clientesDAO from "../DAO/clientesDAO.js";

const clientesController = (app) => {
  app.get("/clientes", async (req, res) => {
    const resposta = await clientesDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/clientes/id/:id", async (req, res) => {
    const resposta = await clientesDAO.mostrarUm(req.params.id);
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/clientes", async (req, res) => {
    const modelado = clientesModel.modelar(req.body)
    const resposta = await clientesDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });
  app.delete("/clientes/id/:id", async(req, res) => {
    const resposta = clientesDAO.deletar(req.params.id)
    res.status(resposta.status).send(resposta.dados)
  });
  app.put("/clientes/id/:id", async(req, res) => {
    const resposta = await clientesDAO.atualizar(req.params.id)
    res.status(resposta.status).send(resposta.dados)
  });
};

export default clientesController;
