'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {

		const heroTypes = [];

		const types = [
			{ id: 1, name: 'attack' },
			{ id: 2, name: 'defence' },
			{ id: 3, name: 'support' },
			{ id: 4, name: 'health' }
		];

		for (let i = 0; i < types.length; i++) {
			heroTypes.push({
				name: types[i].name,
				createdAt: new Date(),
				updatedAt: new Date()
			});
		}

		return queryInterface.bulkInsert('hero-types', heroTypes);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('hero-types', null, {});
	}
};
