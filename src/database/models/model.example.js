const {
  STRING,
} = require('sequelize');

module.exports = (sequelize) => {
  const Task = sequelize.define('Task', {
    title: STRING,
  });

  Task.associate = (models) => {
    models.Task.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Task;
};
