// database: Defines the database name.
// username: Informs the username of access.
// password: Informs the username’s password.
// params.dialect: Informs which database will be used (sqlite, mysql, postgres, mariadb, mssql).
// params.storage: A specific attribute for only SQLite3, it defines the directory where the database files will be recorded.
// params.define.underscored: Standardizes the tables fields’ names to appear in lowercase letters with an underscore.

module.exports = {
    database: "ntask",
    username: "jesus",
    password: "jesus",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        define: {
            underscored: true
        }
    }
};