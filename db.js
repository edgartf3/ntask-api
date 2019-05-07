import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;

module.exports = app => {
    if (!db) {
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config.database,
            config.username, 
            config.password,
            config.params
        );
        db = {
            sequelize,
            Sequelize,
            models: {}
        };
        const dir = path.join(__dirname, "models");
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });
        Object.keys(db.models).forEach(key => {
            //ao executar o projeto dá o seguinte erro:
            //C:\Sistemas\Laboratorio\node\ntask-api\db.js:35
            //db.models[key].associate(db.models);
            //               ^
            //TypeError: db.models[key].associate is not a function            


            //db.models[key].associate(db.models);
        });        
    }
    return db;
};