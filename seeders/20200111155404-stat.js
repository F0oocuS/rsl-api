'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('stats', [
			{
				name: 'health',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'attack',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'defence',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'speed',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'crit rate',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'crit damage',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'resist',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'accuracy',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('stats', null, {});
	}
};
