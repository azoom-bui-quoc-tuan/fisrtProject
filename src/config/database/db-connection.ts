import sql2 from 'mysql2';

const connection = sql2.createPool({
  host: 'localhost',
  port: 3000,
  database: 'Shop',
  user: 'root',
  password: 'root',
  multipleStatements: true,
  connectionLimit: 10,
  acquireTimeout: 5000,
  waitForConnections: true,
  queueLimit: 0,
  debug: true,
});
export const con = connection.promise();
