// SPDX-License-Identifier: MIT OR Commercial
// Copyright (c) 2025 Dave Weinberg
const core = require('@gentlyventures/bootloader-core');
test('core module loads', () => {
  expect(typeof core.run).toBe('function');
});
