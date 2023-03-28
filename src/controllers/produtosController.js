import produtosModel from "../models/produtosModel.js";
import ProdutosDAO from "../DAO/produtosDAO.js";

const produtosController = (app) => {
  app.get("/produtos", async (req, res) => {
    const resposta = await ProdutosDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });


  app.get("/produtos/id/:id", async (req, res) => {
    const resposta = await ProdutosDAO.mostrarUm(req.params.id);
    res.status(resposta.status).send(resposta.dados);
  });


  app.post("/produtos", async (req, res) => {
    const modelado = produtosModel.modelar(req.body)
    const resposta = await ProdutosDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });


  app.delete("/produtos/id/:id", async(req, res) => {
    const resposta = ProdutosDAO.deletar(req.params.id)
    res.status(resposta.status).send(resposta.dados)
  });

  
  app.put("/produtos/id/:id", async(req, res) => {
    const resposta = await ProdutosDAO.atualizar(req.params.id)
    res.status(resposta.status).send(resposta.dados)
  });
};

export default produtosController;
