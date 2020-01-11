const { Model } = require('sequelize');

class Shard extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: DataTypes.INTEGER
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING
			}
		}, { tableName: 'shards', sequelize })
	}

	static associate(models) {
		this.belongsTo(models.Rarity, { foreignKey: 'rarityId' });

		this.hasMany(models.UserShard, { foreignKey: 'shardId' });
	}
}

module.exports = Shard;
