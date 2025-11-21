PlenitudeHub — Complete Package (MVP -> Complete)
Pilot: Brazil (pt-BR) but ready for internationalization.
Contents:
- services/
  - api-gateway (proxy)
  - modules-service (core modules: plenitude/orientador, discovery, experience, active, finance)
  - auth-service (simple auth placeholder)
- admin/ (static admin UI to preview and run modules)
- landing/ (RealEstateX + Plenitude landing pages)
- docs/ (deploy, roadmap, instructions)
- docker-compose.yml, render.yaml, LICENSE
Notes:
1) This is a complete scaffold intended for GitHub -> Render (free) deployment.
2) For production, migrate LowDB to Postgres, set secrets and enable HTTPS.
