import bd from "../infra/bd.js";

const clientesModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      email: obj.email
    };
  },
  /*
  armazenar: (obj) => {
    const modelado = usuariosModel.modelar(obj);
    bd.usuarios.push(modelado);
    return {
      dados: { msg: "Cliente criado com sucesso" },
      status: 201,
    };
  },
  mostrarTodos: () => {
    return {
      dados: { msg: bd.usuarios },
      status: 200,
    };
  },
  mostrarUm: (param) => {
    const data = bd.usuarios.find((usuario) => usuario.email === param);
    return {
      dados: {
        msg: data,
      },
      status: 200,
    };
  },
  deletar: (param) => {
    const data = bd.usuarios.find(usuario => usuario.email === param)
    const index = bd.usuarios.indexOf(data)
    bd.usuarios.splice(index, 1)
    return {
      dados: {
        msg: `Cliente com parâmetro : ${param} deletado com sucesso`,
      },
      status: 200,
    };
  },*/
};

export default clientesModel;
