
'use strict';

const express = require('express');
const app = express()

app.use(express.json())

const err500 = require('./errorHandlers/500')
const err404 = require('./errorHandlers/404')


const router = require('./routes/user')
app.use(router)



app.use('*',err404);
app.use(err500)


function start(port) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}


module.exports = {
    app,
    start
}