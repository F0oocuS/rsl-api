const express = require('express');

const factionController = require('../controllers/faction.controller');

const factionRouter = express.Router();

factionRouter.get('', factionController.getAllFactions);

module.exports = factionRouter;
