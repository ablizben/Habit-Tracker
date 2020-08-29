module.exports = function(sequelize, DataTypes) {
  const Habit = sequelize.define("Habit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      default: false,
      allowNull: false
    }
  });

  Habit.associate = function(models) {
    Habit.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Habit;
};
