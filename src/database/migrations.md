# Migrations
## Table of Contents
- [Create Table](#create-table)
- [Add Column](#add-column)

## Create Table 
```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      document_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      document_type: {
        type: Sequelize.ENUM('cpf', 'rg'),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      company_id: {
        type: Sequelize.UUID,
        references: {
          model: 'company', //foreign key
          key: 'id'
        },
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'NO ACTION'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
```

## Add Column
```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'company',
      'primaryUserId',
      {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: null, //A literal default value, a JavaScript function, or an SQL function (see sequelize.fn)
        unique: false, /** 
          If true, the column will get a unique constraint. 
          If a string is provided, the column will be part of a 
          composite unique index. If multiple columns have the same string, 
          they will be part of the same unique index **/
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',  //CASCADE, RESTRICT, SET DEFAULT, SET NULL or NO ACTION
        onDelete: 'NO ACTION' //CASCADE, RESTRICT, SET DEFAULT, SET NULL or NO ACTION
      }
    )
  },

  down: (queryInterface, Sequelize) => {
   queryInterface.removeColumn('company','primaryUserId')
  }
};
``` 

## Create New Migration
```sh
node_modules/.bin/sequelize migration:generate --name create-product
```
## References
- http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-belongsTo
- http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html#instance-method-addColumn