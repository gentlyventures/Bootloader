// SPDX-License-Identifier: MIT OR Commercial
// Copyright (c) 2025 Dave Weinberg
const adapter = require('@gentlyventures/bootloader-portia-adapter');
test('portia adapter loads', () => {
  expect(typeof adapter.registerAdapter).toBe('function');
});
