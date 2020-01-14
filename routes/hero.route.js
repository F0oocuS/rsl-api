const express = require('express');

const heroController = require('../controllers/hero.controller');

const router = express.Router();

router.get('', heroController.getAllHeroes);

module.exports = router;
