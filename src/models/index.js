// 'use strict';

// const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://postgres:0000@localhost:5432/auth";
// const { Sequelize, DataTypes } = require('sequelize');
// const user = require('./user');

// var Sql= new Sequelize(POSTGRES_URI, {});


// module.exports={

// db:Sql,
// user:user(Sql,DataTypes),


// }



'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Users = require('./user');

const DATABASE_URL =process.env.DATABASE_URL 

const DATABASE_CONFIG={

    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized:false,
        }
    }
}
const sequelize =new Sequelize(DATABASE_URL, DATABASE_CONFIG);

const Users = UserSchema(sequelize, DataTypes);

module.exports={
    db: sequelize,
    Users: Users
}