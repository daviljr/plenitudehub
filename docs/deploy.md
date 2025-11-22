PlenitudeHub — Deploy Guide (quick)

1) Push this repository to GitHub (branch: main).
2) On Render: Create a new Web Service -> connect to repo -> root directory left empty (service will run api-gateway).
   - Build command: npm install
   - Start command: node services/api-gateway/index.js
   - Set Environment variables (at least): ADMIN_PASSWORD, NODE_ENV=production
3) For admin UI, you can create a static site in Render pointing to /admin (or serve via same service if desired).
4) For multiple services, create separate Render services pointing to the respective folders (auth-service, modules-service) and set root directories accordingly.

Notes:
- Replace LowDB JSON persistence by Postgres for durability.
- Configure PAYMENT keys, JWT secrets, and LLM endpoints before production.
