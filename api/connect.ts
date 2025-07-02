import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ZAK3V5NOl3",
    database: "social",
})