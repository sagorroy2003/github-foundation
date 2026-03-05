// =============================================================================
// practice/test.js — Dummy test script for CI validation
// =============================================================================
//
// This script is intentionally simple so the CI pipeline always has something
// to run. Replace or extend these assertions with a proper test framework
// (e.g., Jest, Mocha) as you add real functionality to server.js.
//
// Run manually: node test.js
// Run via CI:   npm test  (defined in package.json)
// =============================================================================

'use strict';

let passed = 0;
let failed = 0;

function assert(description, condition) {
  if (condition) {
    console.log(`  ✅ PASS: ${description}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${description}`);
    failed++;
  }
}

// ---------------------------------------------------------------------------
// Test suite
// ---------------------------------------------------------------------------
console.log('\n=== GitHub Foundations Practice — Test Suite ===\n');

// Basic sanity checks
assert('1 + 1 equals 2', 1 + 1 === 2);
assert('Array.isArray works correctly', Array.isArray([]) === true);
assert('String concatenation works', 'GitHub' + 'Foundations' === 'GitHubFoundations');
assert('Object spread merges properties', ({ ...{ a: 1 }, ...{ b: 2 } }).a === 1);
assert('JSON round-trips correctly',
  JSON.stringify(JSON.parse('{"key":"value"}')) === '{"key":"value"}');

// ---------------------------------------------------------------------------
// Results summary
// ---------------------------------------------------------------------------
console.log(`\nResults: ${passed} passed, ${failed} failed out of ${passed + failed} total.\n`);

if (failed > 0) {
  process.exit(1); // Non-zero exit code marks the CI step as failed
}
