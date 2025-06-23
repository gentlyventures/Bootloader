# Bootloader Architecture

Bootloader is a modular scaffolding engine composed of:

- **Core**: `packages/core` – the central agent factory providing scaffolding primitives.
- **Init Phase**: `packages/init-phase` – pre-flight assessment and project initialization.
- **Portia Adapter**: `packages/portia-adapter` – opinionated scaffolding for PortiaAI.
- **LangGraph Adapter**: `packages/langgraph-adapter` – scaffolding for LangGraph pipelines.
- **Tools**: `tools` – CLI entrypoints and utility scripts.
- **Examples**: `examples/hello-bootloader` – a sample project demonstrating usage.

Each module contains its own README and smoke tests. CI is configured via GitHub Actions in `.github/workflows/ci.yml`.
