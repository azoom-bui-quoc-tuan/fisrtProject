import mysql2 from 'mysql2';

const connection = mysql2.createPool({
  host: 'localhost',
  port: 3306,
  database: 'store',
  user: 'root',
  password: '123',
  multipleStatements: true,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
  debug: false,
});

// new Promise((resolve, reject) =>{
  connection
  .promise()
  .query('select * from user')
  .then((result: any) => console.log(result[0]))
  .catch((error: any) => console.log(error))
// }
// );
export const con = connection.promise();
