-- schema.sql
-- Full, human-readable snapshot of the current database schema.
-- This is a REFERENCE document, not the source of truth for deployment.
-- The source of truth is backend/src/main/resources/db/migration/ (Flyway),
-- which runs automatically on application startup.
--
-- Regenerate this file after adding new migrations, e.g.:
--   mysqldump -u root -p --no-data projectname > database/schema/schema.sql

CREATE DATABASE IF NOT EXISTS projectname;
USE projectname;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(30) NOT NULL DEFAULT 'CUSTOMER',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add further tables here as they are introduced via Flyway migrations.
