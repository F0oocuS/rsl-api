const { Model } = require('sequelize');

class ArtifactStat extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'artifact-stats', sequelize })
	}

	static associate(models) {}
}

module.exports = ArtifactStat;
