"use strict";


// {
//     categoryAssociation: 'Electronics',
//         displayName: 'phones',
//             description: 'smart phone with 10 cameras',
//                 price: '15$',
//                     inventoryCount: 12,
//                         image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&w=1000&q=80'

// }

const Products = (db, DataTypes) => db.define('products',

    {
        categoryAssociation: {
            type: DataTypes.STRING,
            allowNull: false
        },

        displayName: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.STRING,
        },
        inventoryCount: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },



    }
);


module.exports = Products;