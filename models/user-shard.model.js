const { Model } = require('sequelize');

class UserShard extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: DataTypes.INTEGER
			},
			count: {
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'user-shards', sequelize });
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'userId' });
		this.belongsTo(models.Shard, { foreignKey: 'shardId' });
	}
}

module.exports = UserShard;
