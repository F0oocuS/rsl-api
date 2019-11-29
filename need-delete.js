// const Hero = require('./models/hero.model');
// const HeroType = require('./models/hero-type.model');
// const Faction = require('./models/faction.model');
// const Rarity =require('./models/rarity.model');
//
// const faction = [
// 	"Banner Lords",
// 	"Barbarians",
// 	"Dark Elves",
// 	"Demonspawn",
// 	"High Elves",
// 	"Knight Revenant",
// 	"Lizardmen",
// 	"Ogryn Tribes",
// 	"Orcs",
// 	"Skinwalkers",
// 	"The Sacred Order",
// 	"Undead Hordes"
// ];
//
// const types = [
// 	{ id: 1, name: 'attack' },
// 	{ id: 2, name: 'defence' },
// 	{ id: 3, name: 'support' },
// 	{ id: 4, name: 'health' }
// ];
//
// for (let i = 0; i < types.length; i++) {
// 	const data = {
// 		id: types[1].id,
// 		type: types[2].name
// 	};
//
// 	console.log(types.length);
//
// 	HeroType.cr(data)
// }
//
// const rarities = [
// 	{ id: 1, name: 'uncommon' },
// 	{ id: 2, name: 'common' },
// 	{ id: 3, name: 'rare' },
// 	{ id: 4, name: 'epic' },
// 	{ id: 5, name: 'legendary' }
// ];
//
// // console.log(faction, types, rarities);
//
//
// var XLSX = require('xlsx')
// var workbook = XLSX.readFile('raid.xlsx');
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// console.log(xlData);
//
// const heroes = [];
// const faction = [];
// const type = [];
// const rarity = [];
//
// for (let i = 0; i < xlData.length; i++) {
// 	rarity.push(xlData[i].rarity)
// }
//
