'use strict';

const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://postgres:0000@localhost:5432/authdb";
const { Sequelize, DataTypes } = require('sequelize');
const user = require('./user');

var Sql= new Sequelize(POSTGRES_URI, {});


module.exports={

db:Sql,
user:user(Sql,DataTypes),


}