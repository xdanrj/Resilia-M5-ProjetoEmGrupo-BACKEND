

const clientesModel = {
  modelar: (obj) => {
    if ( !emailValido(obj.email) ){
        throw {
        dados: "Email inválido! Digite com '@' e '.com'",
        status: 400
    }
    }
    return {
      id: obj.id,
      nome: obj.nome,
      email: obj.email
    };
  },
 
};

export default clientesModel;
