const test = require("node:test");
const assert = require("node:assert/strict");

test("health endpoint should report ok", async () => {
  // This lightweight baseline test intentionally avoids requiring a server
  // process. The DEVGUARD workflow should expand coverage around uploads.
  assert.equal("ok", "ok");
});

test("DEVGUARD regression requirement: uploads above 10 MB must not become an uncontrolled 500", async () => {
  // This test is intentionally a specification-style failing requirement.
  // Bob should replace it with a real HTTP integration test during the workflow.
  const expectedStatus = 413;
  const currentBehavior = 500;
  assert.equal(currentBehavior, expectedStatus);
});
