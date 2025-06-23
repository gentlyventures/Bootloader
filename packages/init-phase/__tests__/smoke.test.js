// SPDX-License-Identifier: MIT OR Commercial
// Copyright (c) 2025 Dave Weinberg
const InitPhase = require('@gentlyventures/bootloader-init-phase');

describe('InitPhase package', () => {
  test('exports a run method', () => {
    expect(typeof new InitPhase('test').run).toBe('function');
  });
});
