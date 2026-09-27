# DEVGUARD-X Project Context

## Purpose

DEVGUARD-X is an autonomous developer-workflow prototype for the IBM Bob 2.0 hackathon. It demonstrates how an issue can move through analysis, diagnosis, implementation, testing, security review, code review and release readiness.

## Architecture

- `public/`: polished dashboard UI
- root `server.js`: serves the dashboard and lightweight demo APIs
- `target-app/`: intentionally defective Node.js upload service used as the real/sample codebase for the Bob workflow
- `.bob/`: IBM Bob project configuration, rules and reusable workflow skill
- `bob_sessions/`: required Bob task-session evidence screenshots

## Development conventions

- Use Node.js 20+.
- Keep server-side code small and explicit.
- Do not introduce dependencies unless needed.
- Validate untrusted file input.
- Never expose secrets.
- Add regression tests for every bug fix.
- Prefer deterministic, reproducible commands.
- Explain security implications of changes.
- Do not claim performance improvements without measuring them.

## DEVGUARD workflow

For the demo issue:

1. Understand the issue and repository.
2. Analyze the likely root cause.
3. Run independent analysis for tests and security in parallel/subagents where possible.
4. Produce a fix plan.
5. Implement the smallest safe fix.
6. Add or update regression tests.
7. Execute the test suite.
8. Perform code review.
9. Produce release-readiness notes.

## Evidence

Every meaningful Bob task used for the submission should have a task-session summary screenshot saved under `bob_sessions/`.
