import database from "./bd.js";

database.connection.connect();

database.connection.query(
  "CREATE TABLE `ztech`.`filiais` (`id` INT NULL, `nome` VARCHAR(45) NULL, `local` VARCHAR(45) NULL, `cnpj` VARCHAR(45) );",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabela filiais criada com sucesso");
    }
  }
);
database.connection.query(
    "INSERT INTO filiais (id, nome, local, cnpj) VALUES ( 1, 'nometeste', 'localteste', 'cnpjteste' );",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela filiais populada com sucesso");
      }
    }
  );

database.connection.end();
