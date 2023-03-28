import vendedoresModel from "../models/vendedoresModel.js";
import vendedoresDAO from "../DAO/vendedoresDAO.js";


const vendedoresController = (app) => {
  app.get("/vendedores", async (req, res) => {
    const resposta = await vendedoresDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });

  app.post("/vendedores", async (req, res) => {
    try {
    const modelado = vendedoresModel.modelar(req.body)
    const resposta = await vendedoresDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  } catch (error) {
    res.status(error.status).send(error.dados)
  }
  });

// td feito (dao, controller)
  app.get("/vendedores/:atributo/:valor", async (req, res) => {
    const resposta = await vendedoresDAO.mostrarUm(req.params.atributo, req.params.valor);
    res.status(resposta.status).send(resposta.dados);
  });

// td feito
  app.delete("/vendedores/:atributo/:valor", async(req, res) => {
    const resposta = await vendedoresDAO.deletar(req.params.atributo, req.params.valor)
    res.status(resposta.status).send(resposta.dados)
  });

/* funcionando apenas id \/ 
app.put("/vendedores/id/:id", async (req, res) => {
  try {
    const modelado = vendedoresModel.modelar(req.body)
    const resposta = await vendedoresDAO.atualizar(req.params.id, modelado)
    res.status(resposta.status).send(resposta.dados);
  } catch (error) {
    res.status(error.status).send(error.dados);
    console.log(error.dados)
  }
});
*/
  

app.put("/vendedores/:atributo/:valor", async (req, res) => {
  try {
    const modelado = vendedoresModel.modelar(req.body)
    const resposta = await vendedoresDAO.atualizar(req.params.atributo, req.params.valor, modelado)
    res.status(resposta.status).send(resposta.dados);
  } catch (error) {
    res.status(error.status).send(error.dados);
    console.log(error.dados)
  }
});

};

export default vendedoresController;
