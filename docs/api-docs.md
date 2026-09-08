# API Documentation

Document each endpoint as it's built. Suggested format per endpoint:

## POST /api/auth/login

**Request**
```json
{ "email": "user@example.com", "password": "secret" }
```

**Response `200`**
```json
{ "accessToken": "...", "user": { "id": 1, "fullName": "...", "email": "...", "role": "CUSTOMER" } }
```

**Errors**
- `401` — invalid credentials

---

Consider generating this automatically with springdoc-openapi once the API surface grows
(`/v3/api-docs`, Swagger UI at `/swagger-ui.html`).
