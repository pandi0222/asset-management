const Sequelize = require('sequelize');
const config = require('../config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Employee: require('./employee')(sequelize, Sequelize),
  Asset: require('./asset')(sequelize, Sequelize),
  AssetCategory: require('./assetCategory')(sequelize, Sequelize),
  AssetHistory: require('./assetHistory')(sequelize, Sequelize),
};

db.Employee.hasMany(db.Asset, { foreignKey: 'employeeId' });
db.Asset.belongsTo(db.Employee, { foreignKey: 'employeeId' });

db.AssetCategory.hasMany(db.Asset, { foreignKey: 'categoryId' });
db.Asset.belongsTo(db.AssetCategory, { foreignKey: 'categoryId' });

module.exports = db;
