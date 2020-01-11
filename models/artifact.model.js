const { Model } = require('sequelize');

class Artifact extends Model {
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
		}, { tableName: 'artifacts', sequelize});
	}

	static associate(models) {
		this.hasMany(models.UserArtifact, { foreignKey: 'artifactId' });
		this.hasMany(models.ArtifactStat, { foreignKey: 'artifactId' });

		// this.belongsTo(models.Stat)
	}
}

module.exports = Artifact;
