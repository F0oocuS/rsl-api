const Sequelize = require('sequelize');

const HeroModel = require('../models/hero.model');
const HeroTypeModel = require('../models/hero-type.model');
const RarityModel = require('../models/rarity.model');
const FactionModel = require('../models/faction.model');

const UserModel = require('../models/user.model');
const UserHeroModel = require('../models/user-hero.model');
const UserArtifactModel = require('../models/user-artifact.model');
const UserShardModel = require('../models/user-shard.model');

const ArtifactModel = require('../models/artifact.model');

const StatModel = require('../models/stat.model');

const ShardModel = require('../models/shard.model');

const sequelize = new Sequelize('app-rsl', 'root', 'rootroot', {
	host: 'localhost',
	dialect: 'mysql'
});

const models = {
	User: UserModel.init(sequelize, Sequelize),
	UserHero: UserHeroModel.init(sequelize, Sequelize),
	UserArtifact: UserArtifactModel.init(sequelize, Sequelize),
	UserShard: UserShardModel.init(sequelize, Sequelize),
	Hero: HeroModel.init(sequelize, Sequelize),
	HeroType: HeroTypeModel.init(sequelize, Sequelize),
	Rarity: RarityModel.init(sequelize, Sequelize),
	Faction: FactionModel.init(sequelize, Sequelize),
	Artifact: ArtifactModel.init(sequelize, Sequelize),
	Stat: StatModel.init(sequelize, Sequelize),
	Shard: ShardModel.init(sequelize, Sequelize)
};

Object.values(models)
	.filter(model => typeof model.associate === 'function')
	.forEach(model => model.associate(models));

module.exports = {
	...models,
	sequelize
};
