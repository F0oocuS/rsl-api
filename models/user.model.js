const Sequelize = require('sequelize');

class User extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING
			},
		}, { tableName: 'users', sequelize });
	}

	static associate(models) {
		this.hasMany(models.UserHero, { foreignKey: 'userId' });
	}
}

module.exports = User;
