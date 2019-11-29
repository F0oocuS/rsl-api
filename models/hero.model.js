const Sequelize = require('sequelize');

class Hero extends Sequelize.Model {
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
			image: {
				allowNull: false,
				type: DataTypes.STRING
			},
			health: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			attack: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			defence: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			speed: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			critRate: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			critDamage: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			accuracy: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			resist: {
				allowNull: false,
				type: DataTypes.INTEGER
			}
		}, { tableName: 'heroes', sequelize });
	}

	static associate(models) {
		this.belongsTo(models.HeroType, { foreignKey: 'heroTypeId' });
		this.belongsTo(models.Faction, { foreignKey: 'factionId' });
		this.belongsTo(models.Rarity, { foreignKey: 'rarityId' });
	}

	static async cr(data) {
		return await Hero.create(data);
	}

	static async get(param) {
		return await Hero.findAll({ where: { name: param }})
	}
}

module.exports = Hero;
