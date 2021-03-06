import { Knex } from "knex";

export async function up(knex: Knex) {

    return knex.schema.createTable('point_items', function (table) {
        table.increments('id').primary();
        table.integer('point_id', 10).notNullable().unsigned().references('id').inTable('points');
        table.integer('item_id', 10).notNullable().unsigned().references('id').inTable('items');

    })

}
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');

}