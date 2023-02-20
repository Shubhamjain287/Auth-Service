const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");
const { PORT, DB_SYNC } = require("./config/serverConfig");
const db = require("./models/index");

const server = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use("/api",apiRoutes);

    app.listen(PORT,async () => {
        console.log(`Server is Runnnig at PORT ${PORT}`);

        if(DB_SYNC){
            db.sequelize.sync({alter: true});
        }

        // const user = await db.User.findByPk(3);
        // const role = await db.Role.findByPk(1);

        // await user.addRole(role);
        // const response = await user.hasRole(role);
        // console.log(response);

    });

}

server();