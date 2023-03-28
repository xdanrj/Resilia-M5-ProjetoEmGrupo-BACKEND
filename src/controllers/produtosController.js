import produtosModel from "../models/produtosModel.js";
import produtosDAO from "../DAO/produtosDAO.js";

const produtosController = (app) => {
  app.get("/produtos", async (req, res) => {
    const resposta = await produtosDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });

  app.post("/produtos", async (req, res) => {
    const modelado = produtosModel.modelar(req.body)
    const resposta = await produtosDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });

// td feito (dao, controller)
app.get("/produtos/:atributo/:valor", async (req, res) => {
  const resposta = await produtosDAO.mostrarUm(req.params.atributo, req.params.valor);
  res.status(resposta.status).send(resposta.dados);
});

// td feito
app.delete("/produtos/:atributo/:valor", async(req, res) => {
  const resposta = await produtosDAO.deletar(req.params.atributo, req.params.valor)
  res.status(resposta.status).send(resposta.dados)
});

// 
app.put("/produtos/:atributo/:valor", async (req, res) => {
  try {
    const modelado = produtosModel.modelar(req.body)
    const resposta = await produtosDAO.atualizar(req.params.atributo, req.params.valor, modelado)
    res.status(resposta.status).send(resposta.dados);
  } catch (error) {
    res.status(error.status).send(error.dados);
    console.log(error.dados)
  }
});

};

export default produtosController;
