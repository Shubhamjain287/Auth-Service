const express = require("express");
const app = express();

const server = () => {

    app.listen(PORT,() => {
        console.log(`Server is Runnnig at PORT ${PORT}`);
    });

}

server();