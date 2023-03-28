import fornecedoresModel from "../models/fornecedoresModel.js";
import fornecedoresDAO from "../DAO/fornecedoresDAO.js";

const fornecedoresController = (app) => {
  app.get("/fornecedores", async (req, res) => {
    const resposta = await fornecedoresDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });


  app.get("/fornecedores/id/:id", async (req, res) => {
    const resposta = await fornecedoresDAO.mostrarUm(req.params.id);
    res.status(resposta.status).send(resposta.dados);
  });


  app.post("/fornecedores", async (req, res) => {
    try{
    const modelado = fornecedoresModel.modelar(req.body)
    const resposta = await fornecedoresDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
    }
    catch (error) {
      res.status(400).send({ mensagem: error.message})
    }
  });


  app.delete("/fornecedores/id/:id", async(req, res) => {
    const resposta = fornecedoresDAO.deletar(req.params.id)
    res.status(resposta.status).send(resposta.dados)
  });

  
  app.put("/fornecedores/id/:id", async(req, res) => {
    const resposta = await fornecedoresDAO.atualizar(req.params.id)
    res.status(resposta.status).send(resposta.dados)
  });
};

export default fornecedoresController;
