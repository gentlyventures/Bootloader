# BootloaderAgent

The **BootloaderAgent** initializes and maintains Codex modules.
It can be invoked in any repository that includes this bootloader.

## Capabilities

- Scaffold new modules from templates
- Clone `AGENTS.md` and `TODO.md` into new module folders
- Generate `route.ts` and `README.md` stubs if missing
- Use `.codex-scope.json` for guardrails

## Behavior

1. Reference `.codex-scope.json` to determine where files may be written.
2. When a new module name is provided, create `packages/core/src/modules/<name>/` and copy
   the bootloader's `AGENTS.md` and `TODO.md` as starting points.
3. If `route.ts` or `README.md` are missing in a module, generate simple stubs
   so the module compiles.
4. Execute each module's `TODO.md` recursively, creating any subfolders and
   agents requested by those TODO items.

This agent provides the minimal scaffolding so other agents can begin building
features immediately.

---

## \ud83d\udce6 Agent Output Guidelines

When Codex scaffolds new agents using this bootloader, it should follow this structure:

For each agent:
- Create a folder under `/packages/core/src/modules/<module>/agents/<agent-name>/`
- Include the following files:
  - `AGENTS.md` \u2014 defines how this agent operates
  - `TODO.md` \u2014 task list specific to this agent
  - `README.md` \u2014 short description of its behavior
  - `agent-code.ts` \u2014 the logic file for this agent (stub is acceptable)

This ensures all agents are modular, traceable, and bootloader-compatible.

