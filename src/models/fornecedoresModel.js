const validarCNPJ = (cnpj) => {
  const cnpjValido = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
  return cnpjValido.test(cnpj);
}

const fornecedoresModel = {
  modelar: (obj) => {
    if ( !validarCNPJ(obj.cnpj)  ){
      throw {
      dados: "CNPJ incorreto! Digite no formato 'XX.XXX.XXX/0001-XX'",
      status: 400
      
    }
  }
    return {
      id: obj.id,
      nome: obj.nome,
      endereco: obj.endereco,
      produto: obj.produto,
      cnpj: obj.cnpj
    };
  },
  
};

export default fornecedoresModel;