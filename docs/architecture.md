# Architecture

## Overview

```
┌─────────────┐        HTTPS/JSON        ┌──────────────┐        JDBC        ┌───────────┐
│   Frontend  │ ───────────────────────▶ │   Backend    │ ─────────────────▶ │   MySQL   │
│  React SPA  │ ◀─────────────────────── │ Spring Boot  │ ◀───────────────── │  Database │
└─────────────┘      JWT in header       └──────────────┘                    └───────────┘
```

- Frontend is a single-page app (Vite build) served as static files, or from any static host / CDN.
- Backend exposes a stateless REST API secured with JWT (no server-side sessions).
- Database schema is version-controlled via Flyway migrations, applied automatically on boot.

## Auth flow

1. User submits credentials to `POST /api/auth/login`.
2. Backend verifies against `users` table (BCrypt password hash), issues a signed JWT.
3. Frontend stores the token (see `frontend/src/lib/axios.ts`) and attaches it as
   `Authorization: Bearer <token>` on every subsequent request.
4. `JwtAuthFilter` validates the token per-request and populates the Spring Security context.
5. `SecurityConfig` enforces role-based access (`ROLE_ADMIN`, etc.) per route.

## Adding a new feature (example: "products")

**Backend:** `entity/Product.java` → `repository/ProductRepository.java` →
`service/ProductService.java` → `controller/ProductController.java` → `dto/` for
request/response shapes → new Flyway migration for the table.

**Frontend:** `features/products/types.ts` → `features/products/api/productsApi.ts` →
`features/products/hooks/useProducts.ts` → `features/products/components/` →
compose into a `pages/` route.
