const Sequelise = require('sequelize');

class Rarity extends Sequelise.Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			type: {
				allowNull: false,
				type: DataTypes.STRING
			}
		}, { tableName: 'rarities', sequelize })
	}

	static associate(models) {
		this.hasMany(models.Hero, { foreignKey: 'rarityId' });
	}

	static async cr(data) {
		return await Rarity.create(data);
	}

	static async getAll() {
		return await Rarity.getAll();
	}
}

module.exports = Rarity;
