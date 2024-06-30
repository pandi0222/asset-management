module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      name: DataTypes.STRING,
      status: DataTypes.STRING,
    });
    return Employee;
  };
  