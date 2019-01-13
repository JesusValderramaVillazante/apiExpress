import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;

module.exports = app => {
    if (!db) {
        // obtenemos datos del archivo libs/config.js
        const config = app.libs.config;
        // instanceamos new Sequelize(...)
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
        // return db
        db = { sequelize, Sequelize, models: {} };

        // /Users/nomemires/developer/Javascript/apiExpress/models
        const dir = path.join(__dirname, "models");
        fs.readdirSync(dir).forEach(file => {
            // 1. file = tasks.js
            // 2. file = users.js
            
            // /Users/nomemires/developer/Javascript/apiExpress/models/tasks.js
            // /Users/nomemires/developer/Javascript/apiExpress/models/users.js
            const modelDir = path.join(dir, file);
            
            //También puede guardar las definiciones de modelo en un solo archivo mediante el método de importación
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });
        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });
    }
    return db;
};