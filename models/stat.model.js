const { Model } = require('sequelize');

class Stat extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING
			}
		}, { tableName: 'stats', sequelize });
	}

	static associate(models) {
		this.hasMany(models.HeroStat, { foreignKey: 'statId' });
		this.hasMany(models.ArtifactStat, { foreignKey: 'statId' });
	}
}

module.exports = Stat;
