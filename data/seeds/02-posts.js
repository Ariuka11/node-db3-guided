const faker = require("faker")

exports.seed = async function(knex) {
	await knex("posts").insert([
		{
			contents: faker.lorem.sentence(),
			user_id: 1,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 1,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 1,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 1,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 1,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 1,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 2,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 2,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 2,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 3,
		},
		{
			contents: faker.lorem.sentence(),
			user_id: 3,
		},
	])
}
