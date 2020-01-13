const { Model } = require('sequelize');

class Faction extends Model {
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
			},
			image: {
				allowNull: true,
				type: DataTypes.STRING
			}
		}, { tableName: 'factions', sequelize });
	}

	static associate(models) {
		this.hasMany(models.Hero, { foreignKey: 'factionId' });
	}
}

module.exports = Faction;
