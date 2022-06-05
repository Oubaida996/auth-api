"use strict"



const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('../classes/Collection');
const Users = require('./user.model');
const Categories = require('./food.model');
const Clothes = require('./clothes.model');
require('dotenv').config();


const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


const sequelizeOptions = process.env.NODE_ENV === 'development' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

const db = new Sequelize(POSTGRES_URL, sequelizeOptions);

let foodTable = Categories(db, DataTypes);
let clothesTable = Clothes(db, DataTypes);

let foodCollection = new Collection(foodTable);
let clothesCollection = new Collection(clothesTable);

module.exports = {
    db: db,
    Users: Users(db, DataTypes),
    categories: foodCollection,
    clothes: clothesCollection

}