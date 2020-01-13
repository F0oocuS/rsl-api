'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const heroes = [];

		const XLSX = require('xlsx');
		const workbook = XLSX.readFile('raid.xlsx');
		const sheet_name_list = workbook.SheetNames;
		const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
		// console.log(xlData);

		const rarity = await queryInterface.sequelize.query(
			`SELECT * FROM rarities`
		);

		const faction = await queryInterface.sequelize.query(
			`SELECT * FROM factions`
		);

		const type = await queryInterface.sequelize.query(
			"SELECT * FROM `hero-types`"
		);

		for (let i = 0; i < xlData.length; i++) {
			const hero = {
				name: xlData[i].title,
				createdAt: new Date(),
				updatedAt: new Date()
			};

			for (let j = 0; j < rarity[0].length; j++) {
				if (rarity[0][j].name === xlData[i].rarity.toLowerCase()) {
					hero.rarityId = rarity[0][j].id;
				}
			}

			for (let j = 0; j < faction[0].length; j++) {
				if (faction[0][j].name === xlData[i].faction) {
					hero.factionId = faction[0][j].id;
				}
			}

			for (let j = 0; j < type[0].length; j++) {
				if (type[0][j].name === xlData[i].type.toLowerCase()) {
					hero.heroTypeId = type[0][j].id;
				}

				if (type[0][j].name === 'health' && xlData[i].type === 'HP') {
					hero.heroTypeId = type[0][j].id;
				}

				if (type[0][j].name === 'defence' && xlData[i].type === 'Defense') {
					hero.heroTypeId = type[0][j].id;
				}
			}

			heroes.push(hero);
		}

		await queryInterface.bulkInsert('heroes', heroes);

		const stat = await queryInterface.sequelize.query("SELECT * FROM `stats`");

		const heroStats = [];

		for (let i = 0; i < xlData.length; i++) {
			for (let j = 0; j < stat[0].length; j++) {
				const stats = {
					heroId: i + 1,
					createdAt: new Date(),
					updatedAt: new Date()
				};

				if (stat[0][j].name === 'defence') {
					stats.value = xlData[i]['defense'];
					stats.statId = stat[0][j].id
				} else if(stat[0][j].name === 'crit rate') {
					stats.value = xlData[i]['crit_rate'];
					stats.statId = stat[0][j].id
				} else if (stat[0][j].name === 'crit damage') {
					stats.value = xlData[i]['crit_damage'];
					stats.statId = stat[0][j].id
				} else {
					stats.value = xlData[i][stat[0][j].name];
					stats.statId = stat[0][j].id;
				}

				heroStats.push(stats);
			}
		}

		await queryInterface.bulkInsert('hero-stats', heroStats);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('hero-stats', null, {});
		await queryInterface.bulkDelete('heroes', null, {});
	}
};
