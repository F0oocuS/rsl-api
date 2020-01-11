const { Model } = require('sequelize');

class Rarity extends Model {
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
		}, { tableName: 'rarities', sequelize })
	}

	static associate(models) {
		this.hasMany(models.Hero, { foreignKey: 'rarityId' });
	}
}

module.exports = Rarity;
