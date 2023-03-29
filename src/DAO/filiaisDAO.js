import database from "../infra/bd.js";

class filiaisDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM filiais");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(atributo, valor) {
    const dadosbd = await database.query(`SELECT * FROM filiais WHERE ${atributo} = ?`, valor);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO filiais (id, nome, local, cnpj) VALUES (?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Filial inserido com sucesso na tabela Filiais" },
      status: 201,
    };
  }

  static async atualizar(atributo, valor, obj) {
    try {
      await database.query(`UPDATE filiais SET id = ?, nome = ?, local = ?, cnpj = ? WHERE ${atributo} = ?`, [
        obj.id,
        obj.nome,
        obj.local,
        obj.cnpj,
        valor
      ]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Filial atualizado com sucesso usando o atributo "${atributo}"` },
      status: 200,
    };
  }
  static async deletar(atributo, valor) {
    try {
      await database.query(`DELETE FROM filiais WHERE ${atributo} = ?`, valor);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Filial exluido com sucesso usando o atributo "${atributo}"` },
      status: 200,
    };
  }
}

export default filiaisDAO;
