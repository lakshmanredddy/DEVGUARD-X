---
name: devguard-workflow
description: Run the DEVGUARD-X developer issue workflow from diagnosis through validated release readiness.
---

# DEVGUARD-X Workflow Skill

Use this skill when the user asks to process a software issue end-to-end.

## Inputs

- Issue description
- Repository
- Optional logs, failing test output or screenshots

## Procedure

### Phase 1 — Understand

Read the issue, project context and relevant source files. Identify the likely execution path.

### Phase 2 — Parallel analysis

Create focused subtasks when useful:

- Root Cause Analyst: identify the failure and supporting evidence.
- Test Analyst: identify existing tests and missing regression cases.
- Security Analyst: inspect input validation, trust boundaries and abuse cases.

### Phase 3 — Plan

Combine findings into a concise implementation plan. List files that are expected to change.

### Phase 4 — Implement

Make the smallest safe change. Preserve existing behavior outside the issue.

### Phase 5 — Validate

Run targeted tests first, then the relevant full suite. Record exact results.

### Phase 6 — Review

Review the final diff for correctness, maintainability, security and accidental scope creep.

### Phase 7 — Release readiness

Produce:

- Root cause
- Changed files
- Tests and results
- Security findings
- Review findings
- Known limitations
- Release readiness decision based only on observed evidence

Never invent evidence.
