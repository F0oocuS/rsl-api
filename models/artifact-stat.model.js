const { Model } = require('sequelize');

class ArtifactStat extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: DataTypes.INTEGER
			},
			value: {
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'artifact-stats', sequelize })
	}

	static associate(models) {
		this.belongsTo(models.Artifact, { foreignKey: 'artifactId' });
		this.belongsTo(models.Stat, { foreignKey: 'statId' });
	}
}

module.exports = ArtifactStat;
