# DEVGUARD-X — IBM Bob 2.0 Hackathon

DEVGUARD-X is a full-stack developer workflow intelligence prototype for the IBM Bob 2.0 hackathon. It demonstrates an issue-to-release workflow: issue intake, root-cause analysis, parallel agent analysis, fix planning, regression testing, security review, code review and release readiness.

## Run locally

### Windows
Double-click `start.bat`.

### Terminal
Requirements: Node.js 20+

```bash
node server.js
```

Open http://localhost:3000

No npm install is required. The backend uses Node's built-in HTTP server and persists application state to `data/db.json`.

## What is included

- Professional responsive dashboard
- Frontend: HTML + CSS + vanilla JavaScript
- Backend: Node.js HTTP API
- Persistent storage: JSON database in `data/db.json`
- Issue creation and persistence
- Workflow execution and polling
- Agent/stage state tracking
- Test and security evidence
- Release readiness view
- Activity/audit trail
- Project settings
- IBM Bob project rules, skill, custom mode and AGENTS.md
- `bob_sessions/` evidence folder for required Bob task-session screenshots
- Demo target application under `target-app/`

## API

- `GET /api/health`
- `GET /api/dashboard`
- `GET /api/issues`
- `POST /api/issues`
- `GET /api/runs`
- `POST /api/runs`
- `GET /api/runs/:id`
- `GET /api/activity`
- `GET /api/settings`
- `PATCH /api/settings`
- `POST /api/reset-demo`

## Hackathon demo

1. Open the project in IBM Bob IDE using the hackathon-provisioned Bob account.
2. Use the supplied `.bob` rules, skill and custom mode.
3. Start the dashboard.
4. Run `ISS-1042` — “PDF uploads over 10 MB return HTTP 500”.
5. Show the agent workflow progressing through the stages.
6. Show tests, security, code review and release readiness.
7. Capture the required Bob task-session summary screenshots in `bob_sessions/`.

The dashboard is the presentation/control surface; IBM Bob IDE is the core development/agent environment required by the hackathon.
