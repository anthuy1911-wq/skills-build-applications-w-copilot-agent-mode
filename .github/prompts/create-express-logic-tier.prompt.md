---
agent: true
model: GPT-5.5
description: 'Create the Node.js logic tier for the Octofit multi-tier application'
---

Create the logic tier in `octofit-tracker/backend` for the Octofit Tracker multi-tier application.

Requirements:

1. Do not change directories; use path-qualified commands.
2. Initialize a TypeScript Node.js API with Express.
3. Configure scripts for build/dev/start.
4. Add route handlers for:
   - `/api/users/`
   - `/api/teams/`
   - `/api/activities/`
   - `/api/leaderboard/`
   - `/api/workouts/`
5. Keep server port on `8000`.
6. Add Codespaces-aware API URL support using `CODESPACE_NAME`.
7. Configure the API for both Codespaces and localhost by building the base URL as:
   - `https://$CODESPACE_NAME-8000.app.github.dev` when `CODESPACE_NAME` is available
   - `http://localhost:8000` when `CODESPACE_NAME` is not set
8. Verify the API endpoints `/api/users` and `/api/activities` with `curl` after the server is running.
