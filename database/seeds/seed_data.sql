-- seed_data.sql
-- Sample/development data only. Never run this against production.
-- Usage:  mysql -u root -p projectname < database/seeds/seed_data.sql

USE projectname;

INSERT INTO users (full_name, email, password_hash, role) VALUES
    ('Admin User', 'admin@example.com', '$2a$10$replaceWithARealBcryptHash', 'ADMIN'),
    ('Test Customer', 'customer@example.com', '$2a$10$replaceWithARealBcryptHash', 'CUSTOMER');
