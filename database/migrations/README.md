# Migrations

This project uses **Flyway** for versioned schema migrations. The actual migration
files Flyway runs live in the backend module, not here:

```
backend/src/main/resources/db/migration/
├── V1__init_schema.sql
├── V2__add_products_table.sql
├── V3__add_index_to_users.sql
└── ...
```

This top-level `database/migrations/` folder is kept empty on purpose (see `.gitkeep`) —
it exists so the overall repo layout always shows a `database/` folder for anyone
scanning the project, and as a place to document DB conventions.

## Rules for adding a migration

1. Never edit a migration file that has already been applied anywhere (local, staging, prod).
   Add a new one instead — Flyway checksums existing files and will fail on a mismatch.
2. Name files `V{next_number}__{short_description}.sql`, e.g. `V4__add_orders_table.sql`.
3. After merging a new migration, regenerate `database/schema/schema.sql` so it stays a
   readable snapshot of the current schema (see the note at the top of that file).
4. Keep one logical change per migration (one new table, one alter, one index) so history
   stays easy to read and rollback-diagnose.
