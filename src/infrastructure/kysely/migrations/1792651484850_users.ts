import type { Kysely } from 'kysely'

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable('users')
        .addColumn('id', 'uuid', col => col.primaryKey())
        .addColumn('username', 'varchar', col => col.notNull())
        .addColumn('password', 'varchar', col => col.notNull())
        .addColumn('token', 'text')
        .addColumn('created_at', 'timestamptz')
        .addColumn('updated_at', 'timestamptz')
        .addColumn('deleted_at', 'timestamptz')
        .addColumn('disabled_at', 'timestamptz')
        .execute()


    await db.schema
        .createIndex('username_idx')
        .on('users')
        .column('users')
        .execute();
}

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('users').execute();
}
