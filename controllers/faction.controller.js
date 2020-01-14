const Faction = require('../models/faction.model');

exports.getAllFactions = (req, res, next) => {
	Faction.getAllFactions()
		.then(factions => factions ? res.json(factions) : res.sendStatus(404))
		.catch(error => next(error));
};
