# Repo Inspector
Run one command. Understand your project.

Repo Inspector is a developer-first CLI that analyzes a repository, detects the tech stack, inspects structure and dependencies, and uses AI to generate a technical report with actionable recommendations.

## Why this project?
Modern codebases are big and fast-moving. Repo Inspector gives you a quick, consistent snapshot of what you are working with so you can make better decisions before you change anything.

## Features
- Tech stack detection
- Structure and dependency analysis
- AI-generated technical report with recommendations
- Multiple analysis modes: quick, deep, security
- Runs directly from your terminal

## Installation
```bash
npm install
npm run build
npm link
```

## Usage
```bash
repo-inspector analyze
```

```bash
repo-inspector analyze --mode quick
repo-inspector analyze --mode deep
repo-inspector analyze --mode security
```

## Commands
```text
repo-inspector analyze      Analyze the current repository
```

## Project Structure
```text
src/        Source code
dist/       Compiled output
```

## Roadmap
- Richer tech stack fingerprinting (frameworks, cloud, CI)
- Dependency risk and license insights
- Report export formats (Markdown, JSON, HTML)
- Config file support
- GitHub Actions integration

## Contributing
Issues and pull requests are welcome. For large changes, open an issue first to discuss scope and approach.

## License
ISC
