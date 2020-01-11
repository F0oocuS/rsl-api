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
			},
			maxValue: {
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'stats', sequelize });
	}

	static associate(models) {}
}

module.exports = Stat;
