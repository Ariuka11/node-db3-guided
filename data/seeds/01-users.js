const faker = require("faker")

exports.seed = async function(knex) {
	await knex("users").insert([
		{ username: faker.internet.userName() },
		{ username: faker.internet.userName() },
		{ username: faker.internet.userName() },
	])
}
