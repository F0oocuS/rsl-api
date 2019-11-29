const Sequelise = require('sequelize');

class HeroType extends Sequelise.Model {
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
		}, { tableName: 'hero-types', sequelize })
	}

	static associate(models) {
		this.hasMany(models.Hero, { foreignKey: 'heroTypeId' });
	}

	static async cr(data) {
		return await HeroType.create(data);
	}
}

module.exports = HeroType;
