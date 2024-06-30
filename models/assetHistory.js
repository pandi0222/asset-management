module.exports = (sequelize, DataTypes) => {
    const AssetHistory = sequelize.define('AssetHistory', {
      assetId: DataTypes.INTEGER,
      employeeId: DataTypes.INTEGER,
      action: DataTypes.STRING,
      reason: DataTypes.STRING,
    });
    return AssetHistory;
  };
  