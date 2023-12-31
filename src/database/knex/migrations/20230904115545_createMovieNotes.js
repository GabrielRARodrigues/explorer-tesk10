export const up = knex =>
  knex.schema.createTable('movie_notes', table => {
    table.increments('id')
    table.text('title').notNullable()
    table.text('description')
    table.integer('rating', 5)
    table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })

export const down = knex => knex.schema.dropTable('movie_notes')
