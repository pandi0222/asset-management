module.exports = (sequelize, DataTypes) => {
    const Asset = sequelize.define('Asset', {
      serialNumber: DataTypes.STRING,
      uniqueId: DataTypes.STRING,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      status: DataTypes.STRING,
    });
    return Asset;
  };
  