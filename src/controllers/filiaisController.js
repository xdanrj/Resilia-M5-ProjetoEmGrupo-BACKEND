import filiaisModel from "../models/filiaisModel.js";
import filiaisDAO from "../DAO/filiaisDAO.js";

const filiaisController = (app) => {
  app.get("/filiais", async (req, res) => {
    const resposta = await filiaisDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/filiais/id/:id", async (req, res) => {
    const resposta = await filiaisDAO.mostrarUm(req.params.id);
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/filiais", async (req, res) => {
    const modelado = filiaisModel.modelar(req.body)
    const resposta = await filiaisDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });
  app.delete("/filiais/id/:id", async (req, res) => {
    const resposta = await filiaisDAO.deletar(req.params.id)
    res.status(resposta.status).send(resposta.dados)
  });
  app.put("/filiais/id/:id", async (req, res) => {
    const resposta = await filiaisDAO.atualizar(req.params.id, req.body)
    res.status(resposta.status).send(resposta.dados)
  });
};

export default filiaisController;
