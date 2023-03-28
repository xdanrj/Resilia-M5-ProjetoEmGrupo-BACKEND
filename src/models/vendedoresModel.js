const validarEmail = (email) => {
  const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailValido.test(email);
}

const validarCPF = (cpf) => {
  const cpfValido = /^(?:(?!000\.?000\.?000-?00|111\.?111\.?111-?11|222\.?222\.?222-?22|333\.?333\.?333-?33|444\.?444\.?444-?44|555\.?555\.?555-?55|666\.?666\.?666-?66|777\.?777\.?777-?77|888\.?888\.?888-?88|999\.?999\.?999-?99)[0-9]{3}\.?)[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
  return cpfValido.test(cpf);

}

const vendedoresModel = {
  modelar: (obj) => {
    if ( !validarEmail(obj.email)  ){
      throw {
      dados: "Email inválido! Digite com '@' e '.com'",
      status: 400
      }
  }
    if ( !validarCPF(obj.cpf) ){
      throw {
      dados: "CPF inválido! Digite no formato 'XXX.XXX.XXX-XX'",
      status: 400
      }
    }
    return {
      id: obj.id,
      nome: obj.nome, 
      email: obj.email,
      cpf: obj.cpf,
      meta: obj.meta
    };
  },
  
};

export default vendedoresModel;
