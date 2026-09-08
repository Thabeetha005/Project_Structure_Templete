# Project Name

Full-stack starter template: **Spring Boot** (Java 17) backend, **React + TypeScript**
frontend, **MySQL** database with Flyway migrations. No Docker required.

## Structure

```
project-root/
├── backend/     # Spring Boot 3.x REST API
├── frontend/    # React 19 + TypeScript + Vite SPA
├── database/    # Schema reference, seed data, migration conventions
└── docs/        # API docs, architecture notes
```

## Tech stack

**Backend:** Spring Boot 3.3.4, Java 17, Spring Web / Data JPA / Security / Validation,
MySQL, Flyway, JWT auth (jjwt), Lombok.

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Query,
React Hook Form + Zod, React Router v7, Axios.

**Database:** MySQL, schema owned by Flyway migrations (`ddl-auto: validate`, never `update`).

## Getting started

### 1. Database

Create a local MySQL database (or let Flyway auto-create it — see `application.yml`):

```bash
mysql -u root -p -e "CREATE DATABASE projectname;"
```

Flyway runs automatically on backend startup and applies everything in
`backend/src/main/resources/db/migration/`.

### 2. Backend

```bash
cd backend
cp .env.example .env    # fill in DB_PASSWORD, JWT_SECRET, etc.
# export the values in .env into your shell, or configure them in your IDE run config
./mvnw spring-boot:run
```

API runs on `http://localhost:8080`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:5173`.

## Environment variables

| Variable | Where | Purpose |
|---|---|---|
| `DB_URL`, `DB_USERNAME`, `DB_PASSWORD` | backend | MySQL connection |
| `JWT_SECRET`, `JWT_EXPIRATION_MS` | backend | Token signing |
| `CORS_ORIGINS` | backend | Allowed frontend origins |
| `VITE_API_BASE_URL` | frontend | Backend API base URL |

## Conventions

- **Backend** is package-by-layer (`controller/`, `service/`, `repository/`, `entity/`, `dto/`).
  Split into package-by-feature once the app grows large.
- **Frontend** is feature-based: each domain lives in `features/<name>/` with its own
  `api/`, `components/`, `hooks/`, and `types.ts`. `pages/` stays thin — just composition.
- **Database** schema changes always go through a new Flyway migration file, never by
  editing an existing one or using `ddl-auto: update`.
