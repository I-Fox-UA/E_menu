const knex = require('knex')({
  client: 'postgres',
  connection: {
    user: "postgres",
    password: "123456",
    host: "database",
    database: "e_menu"
  }
});

async function createTable() {
  try {
    await knex.schema.dropTableIfExists('categories');
    await knex.schema.dropTableIfExists('positions');
    await knex.schema.withSchema('public').createTable('categories', (tableCategries) => {
      tableCategries.increments('id');
      tableCategries.string('name_categories', 50);
    });
    await knex.schema.withSchema('public').createTable('positions', (tablePositions) => {
      tablePositions.increments('id');
      tablePositions.string('name_positions', 50);
      tablePositions.string('description_positions', 500);
      tablePositions.string('weight_positions', 10);
      tablePositions.string('sell', 10);
      tablePositions
        .increments('categories_id', { primaryKey: false })
        .unsigned()
        .references('categories.id');
    });
    console.log('Created table sucsses!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  };
};
createTable();