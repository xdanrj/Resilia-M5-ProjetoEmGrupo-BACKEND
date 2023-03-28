import mysql from "mysql";

const database = {
  connection: mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "",
    database: "ztech",
  }),

  query: (query, valores) => {
    return new Promise((resolve, reject) => {database.connection.query(query, valores, function (error, results, fields) {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
};

export default database;
