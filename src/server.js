'use strict';

const express = require("express");
const logger = require("./middleware/logger");
const UserRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use(logger);
app.use(UserRouter);


module.exports={
server: app,
start: port=>{

app.listen(port, ()=>{console.log(`server is listening on port ${port}`);})


}

}

