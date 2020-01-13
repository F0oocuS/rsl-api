'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		const rarity = [];

		const rarities = [
			{ id: 1, name: 'uncommon' },
			{ id: 2, name: 'common' },
			{ id: 3, name: 'rare' },
			{ id: 4, name: 'epic' },
			{ id: 5, name: 'legendary' }
		];

		for (let i = 0; i < rarities.length; i++) {
			rarity.push({
				name: rarities[i].name,
				createdAt: new Date(),
				updatedAt: new Date()
			});
		}

		return queryInterface.bulkInsert('rarities', rarity);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('rarities', null, {});
	}
};
