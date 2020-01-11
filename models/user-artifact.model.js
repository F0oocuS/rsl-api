const { Model } = require('sequelize');

class UserArtifact extends Model {
	static init(sequelize, DataTypes) {
		return super.init({
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			rating: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
		}, { tableName: 'user-artifacts', sequelize });
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'userId' });
		this.belongsTo(models.Artifact, { foreignKey: 'artifactId' });
	}
}

module.exports = UserArtifact;
