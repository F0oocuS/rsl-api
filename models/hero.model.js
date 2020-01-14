const { Model } = require('sequelize');

const Faction = require('./faction.model');

class Hero extends Model {
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
				allowNull: true,
				type: DataTypes.STRING
			},
			health: {
				allowNull: false,
				type: DataTypes.STRING
			},
			attack: {
				allowNull: false,
				type: DataTypes.STRING
			},
			defence: {
				allowNull: false,
				type: DataTypes.STRING
			},
			speed: {
				allowNull: false,
				type: DataTypes.STRING
			},
			critRate: {
				allowNull: false,
				type: DataTypes.STRING
			},
			critDamage: {
				allowNull: false,
				type: DataTypes.STRING
			},
			resist: {
				allowNull: false,
				type: DataTypes.STRING
			},
			accuracy: {
				allowNull: false,
				type: DataTypes.STRING
			}
		}, { tableName: 'heroes', sequelize });
	}

	static associate(models) {
		this.belongsTo(models.HeroType, { foreignKey: 'heroTypeId' });
		this.belongsTo(models.Faction, { foreignKey: 'factionId' });
		this.belongsTo(models.Rarity, { foreignKey: 'rarityId' });

		this.hasMany(models.UserHero, { foreignKey: 'heroId' });
		this.hasMany(models.HeroStat, { foreignKey: 'heroId' });
	}

	static async getAllHeroes() {
		return await Hero.findAll({ where: { factionId: 1 } });
	}

	static async getAllHeroesFromFaction() {
		const factions = await Faction.getAllFactions();
		const arr = [];

		for (let i = 0; i < factions.length; i++) {
			const obj = {
				id: factions[i].id,
				name: factions[i].name,
				heroes: []
			};

			const hero = await this.getAllHeroes({ where: { factionId: factions[i].id } });

			for (let j = 0; j < hero.length; j++) {
				obj.heroes.push(hero[j]);
			}

			arr.push(obj)
		}

		return arr;
	}
}

module.exports = Hero;
