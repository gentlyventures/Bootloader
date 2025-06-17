# Sample Roadmap

## Plan
- **StrategyAgent** drafts the roadmap and agent roles.
- Output: `roadmap.md`, a task tree with milestones.

## Research
- **ResearchAgent** gathers market trends and intelligence.
- Output: `research.md` summarizing key findings.

## Build
- **DeveloperAgent** writes code based on the design brief.
- **MCPIntegrationAgent** prepares Figma plugin integration.
- Output: TypeScript files and `inject_from_schema.js`.

## QA
- **QAAgent** spawns sub-agents for testing and compliance checks.
- Output: `test/*.ts`, `runtime-log.json`.

## Deliver
- **RevealAgent** streams logs for a UI dashboard.
- **OutcomeAgent** scores engagement and quality.
- Output: `report.md`, `score.json`.
