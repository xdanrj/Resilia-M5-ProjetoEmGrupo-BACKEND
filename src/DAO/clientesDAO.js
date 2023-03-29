import database from "../infra/bd.js";

class clientesDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM clientes");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(atributo, valor) {
    const dadosbd = await database.query(`SELECT * FROM clientes WHERE ${atributo} = ?`, valor);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO clientes (idusuarios, nome, email) VALUES (?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Cliente inserido com sucesso na tabela Clientes" },
      status: 201,
    };
  }

  static async atualizar(atributo, valor, obj) {
    try {
      await database.query(`UPDATE clientes SET idusuarios = ?, nome = ?, email = ? WHERE ${atributo} = ?`, [
        obj.id,
        obj.nome,
        obj.email,
        obj.cpf,
        obj.cep,
        valor
      ]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Cliente atualizado com sucesso usando o atributo "${atributo}"` },
      status: 200,
    };
  }
  static async deletar(atributo, valor) {
    try {
      await database.query(`DELETE FROM clientes WHERE ${atributo} = ?`, valor);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Cliente exluido com sucesso usando o atributo "${atributo}"` },
      status: 200,
    };
  }
}

export default clientesDAO;
