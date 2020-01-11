const { Model } = require('sequelize');

class HeroType extends Model {
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
		}, { tableName: 'hero-types', sequelize })
	}

	static associate(models) {
		this.hasMany(models.Hero, { foreignKey: 'heroTypeId' });
	}
}

module.exports = HeroType;
