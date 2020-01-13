'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.bulkInsert('People', [{
			name: 'John Doe',
			isBetaMember: false
		  }], {});
		*/

		const factions = [];

		const faction = [
			'Banner Lords',
			'Barbarians',
			'Dark Elves',
			'Demonspawn',
			'High Elves',
			'Knight Revenant',
			'Lizardmen',
			'Ogryn Tribes',
			'Orcs',
			'Skinwalkers',
			'The Sacred Order',
			'Undead Hordes'
		];

		for (let i = 0; i < faction.length; i++) {
			factions.push({
				name: faction[i],
				image: null,
				createdAt: new Date(),
				updatedAt: new Date()
			});
		}

		return queryInterface.bulkInsert('factions', factions, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('factions', null, {});
	}
};
