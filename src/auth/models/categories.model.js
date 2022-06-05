"use strict";




const Categories = (db, DataTypes) => db.define('categories',

    {
        normalizedName: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        dispalyName: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        }


    }
);


module.exports = Categories;