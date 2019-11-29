const Sequelize = require('sequelize');

class Faction extends Sequelize.Model {
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
				allowNull: false,
				type: DataTypes.STRING
			}
		}, { tableName: 'factions', sequelize });
	}

	static associate(models) {
		this.hasMany(models.Hero, { foreignKey: 'factionId' });
	}

	static async cr(data) {
		return await Faction.create(data);
	}
}

module.exports = Faction;
