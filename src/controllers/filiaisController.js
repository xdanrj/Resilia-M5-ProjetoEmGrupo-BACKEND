import filiaisModel from "../models/filiaisModel.js";
import filiaisDAO from "../DAO/filiaisDAO.js";

const filiaisController = (app) => {
  app.get("/filiais", async (req, res) => {
    const resposta = await filiaisDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });

  app.post("/filiais", async (req, res) => {
    try{
    const modelado = filiaisModel.modelar(req.body)
    const resposta = await filiaisDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
    }
    catch (error) {
      res.status(400).send({ mensagem: error.message})
    }
  });

  // td feito (dao, controller)
  app.get("/filiais/:atributo/:valor", async (req, res) => {
    const resposta = await filiaisDAO.mostrarUm(req.params.atributo, req.params.valor);
    res.status(resposta.status).send(resposta.dados);
  });

// td feito
  app.delete("/filiais/:atributo/:valor", async(req, res) => {
    const resposta = await filiaisDAO.deletar(req.params.atributo, req.params.valor)
    res.status(resposta.status).send(resposta.dados)
  });

  app.put("/filiais/:atributo/:valor", async (req, res) => {
    try {
      const modelado = filiaisModel.modelar(req.body)
      const resposta = await filiaisDAO.atualizar(req.params.atributo, req.params.valor, modelado)
      res.status(resposta.status).send(resposta.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
      console.log(error.dados)
    }
  });

};

export default filiaisController;
