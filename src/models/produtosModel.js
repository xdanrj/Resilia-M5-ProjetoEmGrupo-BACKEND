const produtosModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      cor: obj.cor,
      preco: obj.preco
    };
    
  },
};

export default produtosModel;
