import fornecedoresModel from "../models/fornecedoresModel.js";
import fornecedoresDAO from "../DAO/fornecedoresDAO.js";

const fornecedoresController = (app) => {
  app.get("/fornecedores", async (req, res) => {
    const resposta = await fornecedoresDAO.mostrarTodos();
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


  // td feito (dao, controller)
  app.get("/fornecedores/:atributo/:valor", async (req, res) => {
    const resposta = await fornecedoresDAO.mostrarUm(req.params.atributo, req.params.valor);
    res.status(resposta.status).send(resposta.dados);
  });

// td feito
  app.delete("/fornecedores/:atributo/:valor", async(req, res) => {
    const resposta = await fornecedoresDAO.deletar(req.params.atributo, req.params.valor)
    res.status(resposta.status).send(resposta.dados)
  });

  app.put("/fornecedores/:atributo/:valor", async (req, res) => {
    try {
      const modelado = fornecedoresModel.modelar(req.body)
      const resposta = await fornecedoresDAO.atualizar(req.params.atributo, req.params.valor, modelado)
      res.status(resposta.status).send(resposta.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
      console.log(error.dados)
    }
  });
};

export default fornecedoresController;
