const { Model } = require('sequelize');

class HeroStat extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			value: {
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'hero-stats', sequelize });
	}

	static associate(models) {
		this.belongsTo(models.Hero, { foreignKey: 'heroId' });
		this.belongsTo(models.Stat, { foreignKey: 'statId' });
	}
}

module.exports = HeroStat;
