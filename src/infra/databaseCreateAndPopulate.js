import database from "./bd.js";


database.connection.connect();


database.connection.query("CREATE TABLE `ztech`.`filiais` ( `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, `nome` VARCHAR(45), `local` VARCHAR(45), `cnpj` VARCHAR(45) ); CREATE TABLE `ztech`.`vendedores` ( `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, `nome` VARCHAR(45), `email` VARCHAR(45), `cpf` VARCHAR(20), `meta` BIGINT(10) ); CREATE TABLE `ztech`.`fornecedores` ( `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, `nome` VARCHAR(45), `endereco` VARCHAR(60), `cnpj` VARCHAR(30) ); CREATE TABLE `ztech`.`produtos` (`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, `nome` VARCHAR(60), `cor` VARCHAR(20) , `preco` FLOAT(10), `img` VARCHAR(300) ); CREATE TABLE `ztech`.`clientes`( `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, `nome` VARCHAR(60) , `email` VARCHAR(50), `cpf` VARCHAR(18), `cep` VARCHAR(18) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela Filiais criada com sucesso")
      console.log("Tabela Vendedores criada com sucesso")
      console.log("Tabela Fornecedores criada com sucesso")
      console.log("Tabela Produtos criada com sucesso")
      console.log("Tabela Clientes criada com sucesso")
    }
  }
);

database.connection.query("INSERT INTO filiais (id,nome,local,cnpj) VALUES (1,'Z Tech RJ','Rua São José, Centro, n 32, Rio de Janeiro, RJ','22.312.432/0005-47'), (2,'Z Tech SP','Rua Conde de Sarzedas, n 134, Liberdade, São Paulo, SP','13.435.654/0002-33'), (3,'Z Tech MG','Rua Dr. Plínio de Morais, n 542, Cidade Nova, Belo Horizonte, MG','43.887.674/0003-12'), (4,'Z Tech RS','Rua Prof. Sarmento Barata, n 277, Navegantes, Porto Alegre, RS','76.721.113/0001-83'), (5,'Z Tech DF','Asa Sul Superquadra Sul n 215 BL K, Asa Sul, Brasília, DF','12.552.324/0009-51'); INSERT INTO vendedores (id,nome,email,cpf,meta) VALUES (1,'João Silva','joaosilva@ztech.com','123.456.789-01',30000), (2,'Maria Helena','mariahelena@ztech.com','987.654.321-01',50000), (3,'Pedro Souza','pedrosouza@ztech.com','456.789.123-01',45000), (4,'Caroline Santos','carolinesantos@ztech.com','369.214.780-21',20000), (5,'Patricia Lemos','patricialemos@ztech.com','789.012.697-40',47000), (6,'Yuri Rocha','yurirocha@ztech.com','154.012.378-95',3000); INSERT INTO fornecedores (id,nome,endereco,cnpj) VALUES (1,'Atacadista Eletrônico','Rua Mário Quintana, n 18, Ouro Preto, Minas Gerais, MG','15.223.344/5567-45'), (2,'Fábrica Tech','Rua Uruguaiana n 969, Centro, Rio de Janeiro, RJ','44.223.387/6568-87'), (3,'Mirante Games','Avenida Nossa Senhora de Copacabana, n 68, Copacabana, Rio de Janeiro, RJ','21.223.788/3569-54'), (4,'T. Eletron','Rua 25 de Março, n 12, Centro, São Paulo, SP','31.256.341/1560-52'), (5,'Start T.','Avenida Principal, n 630, Três Figueiras, Porto Alegre, RS','11.623.374/4565-09'); INSERT INTO clientes (id,nome,email,cpf,cep) VALUES (1,'Pedro Andrade Mariano','andrade@yahoo.com','196.164.129-96','23842-283'), (2,'Maylah Fonseca da Silva','maylah@gmail.com','183.182.173-45','28137-282'), (3,'Myllany Hollanda Pereira','hollanda.rj@gmail.com','124.183.186-69','28429-293'), (4,'Michel Castanheira pinto','castanha@gmail.com','134.134.142-70','18328-382'), (5,'Hugo dos Santos Alves','hugu@gmail.com','189.148.197-95','48218-293'), (6,'Hevelyn Costa Golfinho','hevelynrow@gmail.com','189.138.196-95','49229-392'); INSERT INTO produtos (id,nome,cor,preco,img) VALUES (1,'Samsung Galaxy A34','Violeta',2317, 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a346mzkazto/gallery/br-galaxy-a34-5g-sm-a346-sm-a346mzkazto-thumb-535811088?$240_240_PNG$'), (2,'JBL Go 3','Preto',240, 'https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw61b5bf85/JBL_GO_3_HERO_BLACK_0079.png?sw=537&sfrm=png'), (3,'Philco Fone','Azul',95, 'https://philco.vteximg.com.br/arquivos/ids/236068-1000-1000/PFO06BTRG-01.jpg?v=638047388092570000'), (4,'Canon Camera','Preto',968, 'https://www.canon.com.br/static/landings/cameras/EOS-REBEL-T7-Plus/files/img/frontend/product/slider/05_thumb.jpg'), (5,'Xbox Videogame','Branco',1530, 'https://pngimg.com/uploads/xbox/xbox_PNG101375.png'); ",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela Filiais populada com sucesso")
        console.log("Tabela Vendedores populada com sucesso")
        console.log("Tabela Fornecedores populada com sucesso")
        console.log("Tabela Produtos populada com sucesso")
        console.log("Tabela Clientes populada com sucesso")
      }
    }
  );

database.connection.end();
