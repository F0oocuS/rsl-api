const Hero = require('../models/hero.model');

exports.getAllHeroes = (req, res, next) => {
	Hero.getAllHeroesFromFaction()
		.then(heroes => heroes ? res.json(heroes) : res.sendStatus(404))
		.catch(error => next(error));
};

