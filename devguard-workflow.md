# DEVGUARD-X Workflow Rules

- Treat every issue as a workflow, not as a single coding request.
- Before editing, identify the affected files and the likely failure path.
- Prefer independent analysis for root cause, tests and security.
- Every bug fix must include a regression test when technically feasible.
- Run tests after modifications.
- Never claim tests passed unless the command actually passed.
- Never claim a security issue is absent without performing the relevant checks.
- Keep changes minimal and explain why each changed file is necessary.
- Preserve backward compatibility unless the issue requires a breaking change.
- Never include secrets, credentials or personal data in generated reports.
- When reporting impact, distinguish measured values from estimates.
- End workflow tasks with: Root Cause, Changes, Tests, Security, Review, Release Readiness.
