import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  database: "todo_tutorial"
});
