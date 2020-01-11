const { Model } = require('sequelize');

class Shard extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'shards', sequelize })
	}

	static associate(models) {
		this.hasMany(models.UserShard, { foreignKey: 'shardId' });
	}
}

module.exports = Shard;
