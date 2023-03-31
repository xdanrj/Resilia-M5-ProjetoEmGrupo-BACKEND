const produtosModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      cor: obj.cor,
      preco: obj.preco,
      img: obj.img
    };
    
  },
};

export default produtosModel;
