module.exports = (sequelize, DataTypes) => {
    const AssetCategory = sequelize.define('AssetCategory', {
      name: DataTypes.STRING,
    });
    return AssetCategory;
  };
  