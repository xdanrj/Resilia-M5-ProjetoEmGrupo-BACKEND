import clientesModel from "../models/clientesModel.js";
import clientesDAO from "../DAO/clientesDAO.js";

const clientesController = (app) => {
  app.get("/clientes", async (req, res) => {
    const resposta = await clientesDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });

  app.post("/clientes", async (req, res) => {
    try {
    const modelado = clientesModel.modelar(req.body)
    const resposta = await clientesDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados)
    } catch (error) {
      res.status(400).send({ mensagem: error.message})
    }
  });

  // td feito (dao, controller)
  app.get("/clientes/:atributo/:valor", async (req, res) => {
    const resposta = await clientesDAO.mostrarUm(req.params.atributo, req.params.valor);
    res.status(resposta.status).send(resposta.dados);
  });

// td feito
  app.delete("/clientes/:atributo/:valor", async(req, res) => {
    const resposta = await clientesDAO.deletar(req.params.atributo, req.params.valor)
    res.status(resposta.status).send(resposta.dados)
  });

  app.put("/clientes/:atributo/:valor", async (req, res) => {
    try {
      const modelado = clientesModel.modelar(req.body)
      const resposta = await clientesDAO.atualizar(req.params.atributo, req.params.valor, modelado)
      res.status(resposta.status).send(resposta.dados);
    } catch (error) {
      res.status(error.status).send(error.dados);
      console.log(error.dados)
    }
  });

};

export default clientesController;
