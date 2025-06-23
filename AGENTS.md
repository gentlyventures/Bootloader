# Bootloader Agent Registry

This file tracks the main agents included in this repo.

## Core Agents
- **CoreAgent**  
  **Location:** `packages/core`  
  **Purpose:** Agent factory providing scaffolding primitives.  
  **Usage:** Internal call via AgentManager.

- **InitPhaseAgent**  
  **Location:** `packages/init-phase/index.js`  
  **Purpose:** Pre-flight assessment and initial scaffolding.  
  **Usage:** `boot init <projectName>`

- **PortiaAdapterAgent**  
  **Location:** `packages/portia-adapter/src/index.js`  
  **Purpose:** Scaffolding opinionated PortiaAI-powered projects.  
  **Usage:** Internal call by CoreAgent.

- **LangGraphAdapterAgent**  
  **Location:** `packages/langgraph-adapter/src/index.js`  
  **Purpose:** Scaffolding for LangGraph-based pipelines.  
  **Usage:** Internal call by CoreAgent.

- **ToolsAgent**  
  **Location:** `tools/cli.js`  
  **Purpose:** CLI command dispatcher and utility scripts.  
  **Usage:** `boot --help`

### Sub-Agents
- `ScaffoldAgent` – scaffolds code directories and templates
- `CIAgent` – configures CI/CD workflows
- `DocAgent` – generates and updates project documentation
- `LovableAgent` – prepares the Lovable landing page prompt
