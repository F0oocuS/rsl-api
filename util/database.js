const Sequelize = require('sequelize');

const HeroModel = require('../models/hero.model');
const HeroTypeModel = require('../models/hero-type.model');
const RarityModel = require('../models/rarity.model');
const FactionModel = require('../models/faction.model');

const UserModel = require('../models/user.model');
const UserHeroModel = require('../models/user-hero.model');

const sequelize = new Sequelize('app-rsl', 'root', 'rootroot', {
	host: 'localhost',
	dialect: 'mysql'
});

const models = {
	User: UserModel.init(sequelize, Sequelize),
	UserHero: UserHeroModel.init(sequelize, Sequelize),
	Hero: HeroModel.init(sequelize, Sequelize),
	HeroType: HeroTypeModel.init(sequelize, Sequelize),
	Rarity: RarityModel.init(sequelize, Sequelize),
	Faction: FactionModel.init(sequelize, Sequelize)
};

Object.values(models)
	.filter(model => typeof model.associate === 'function')
	.forEach(model => model.associate(models));

module.exports = {
	...models,
	sequelize
};
