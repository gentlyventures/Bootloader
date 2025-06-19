# Run All Modules

This document guides Codex to execute every module's TODO list.

1. Look for `/src/modules/**/TODO.md` in the current repository.
2. For each module found, read its `AGENTS.md` and `TODO.md` and complete the
   checklist recursively.
3. If no modules are present, return control to `src/ops/bootloader/TODO.md`
   so the bootloader can continue.
