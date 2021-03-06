const { Model } = require('sequelize');

class UserHero extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: DataTypes.INTEGER
			},
			level: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			rating: {
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'user-heroes', sequelize });
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'userId' });
		this.belongsTo(models.Hero, { foreignKey: 'heroId' });
	}
}

module.exports = UserHero;
