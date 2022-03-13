"use strict";




const Clothes = (db, DataTypes) => db.define('clothes',

    {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },

        brand: {
            type: DataTypes.STRING,
        }



    }
);


module.exports =Clothes;