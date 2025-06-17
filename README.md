# 🧠 Codex Bootloader

A modular, recursive build system for Codex and agent-driven AI applications.

This repo contains the foundational instructions, templates, and scaffolding logic to:

- Bootstrap new Codex modules with zero manual setup
- Recursively generate agents, components, orchestration layers, and UI
- Maintain a consistent structure across all Gently Ventures and client repos

## ✨ How It Works

Each module (e.g. `/src/modules/little-ai-theater/`) is created using:

- `AGENTS.md` – describes the recursive agent-building logic
- `TODO.md` – defines the component and file-level tasks
- `.codex-scope.json` – restricts Codex to only write where allowed
- `bootstrap-module.ts` – CLI to scaffold a new module in seconds
- `run-all.md` – top-level Codex executor that processes all TODOs recursively

## 📦 Folder Structure

```
codex-bootloader/
├── AGENTS.md
├── TODO.md
├── run-all.md
├── .codex-scope.json
├── bootstrap-module.ts
└── README.md
```

## 🛠️ Usage

In any Codex-connected repo (e.g. a client project):

### 1. Clone this bootloader:

```bash
git submodule add https://github.com/gentlyventures/codex-bootloader src/ops/codex-bootloader
```

Or instruct Codex to do this in its first prompt:

```
Clone https://github.com/gentlyventures/codex-bootloader into /src/ops/codex-bootloader and run bootstrap-module.ts
```

### 2. Bootstrap a new module:

```bash
npx ts-node src/ops/codex-bootloader/bootstrap-module.ts ai-showcase
```

This creates:

```
/src/modules/ai-showcase/
  ├── AGENTS.md
  └── TODO.md
```

### 3. Instruct Codex to begin building:

```
Read /src/modules/ai-showcase/TODO.md and recursively build every item. Use the connected AGENTS.md to create agent folders and subfiles as needed.
```

### 4. Customize for Each Module

You can safely edit `TODO.md` or `AGENTS.md` in any module — the originals remain in this repo.

---

## 🔮 Agent Superpowers

Codex agents can spawn sub-agents recursively. Use `AGENT_TYPES.md` to pick the right roles and design an entire swarm. With a well-defined roadmap, Codex can self-plan and then self-build complete applications.

## 🚀 Quickstart

```bash
git submodule add https://github.com/gentlyventures/codex-bootloader src/ops/codex-bootloader
npx ts-node src/ops/codex-bootloader/bootstrap-module.ts fiveblocks
```

## ✅ Compatible With

* Codex (chat.openai.com/codex)
* Lovable.dev (design agents)
* GitHub CLI
* Node.js + TypeScript environments
* Any AI/LLM-based automation

---

## 🔐 Scope Protection

Codex should always check `.codex-scope.json` before generating files to ensure it stays within safe bounds.

---

## 🧭 Why Use This?

Because copy-pasting prompts and wiring files manually breaks the flow.

This system lets you say:

> “Codex, go here, clone that, and start building.”

And it just works.

---

## 📡 Using Codex Bootloader Across Repos (e.g. Client Systems)

You can run Codex Bootloader inside one repo while targeting a **different external repo** (like a client project) for actual module building.

### 🧠 Architecture

| Repo | Role |
|------|------|
| `codex-bootloader` | The recursive control kernel |
| `client-repo` (e.g. `fiveblocks`) | The build target (external repo) |

### 🧪 Setup via ChatGPT

1. Open a clean ChatGPT thread
2. Train it on the bootloader (e.g. paste this README or high-level summary)
3. Upload `.txt` transcripts of any past planning/work sessions
4. Ask it to output:
   - ✅ A Codex prompt that uses this bootloader to scaffold an external module
   - ✅ A `roadmap.md` file to include in that external module

### 🛠 Codex Bootstrap for External Repos

Paste this in Codex (inside the bootloader repo):

```bash
npx ts-node bootstrap-module.ts fiveblocks --external=https://github.com/gentlyventures/fiveblocks
```

Then run:

```bash
npx ts-node run-all.ts fiveblocks
```

This scaffolds agents and executes the external module's `/TODO.md`.

### 📁 External Repo Folder Structure (Example)

```
/src/modules/fiveblocks/
  ├── AGENTS.md
  ├── TODO.md
  ├── agents/
  └── roadmap.md

/docs/
  ├── _config.yml
  ├── _data/roadmap.yml
  ├── roadmap/index.md
  ├── sessions/index.md
  └── agents.md
```

All logs and progress live inside `/docs/`. Codex will read and write based on what agents and roadmap steps are defined.

---

## 🧑‍💻 Maintained by Gently Ventures

Feel free to fork and adapt this for your own recursive agent build systems.

MIT License.

### 🏷️ Repo Tags

- `codex`
- `agents`
- `recursive-build`
- `ai-infrastructure`
- `gently-ventures`
- `llm-pipeline`
