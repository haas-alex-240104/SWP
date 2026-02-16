# OpenCode Agent Functions Overview

## Agent Types

### Primary Agents
- **Build Agent** - Full development work with all tools enabled
- **Plan Agent** - Analysis and planning without making changes (restricted)

### Subagents
- **General Agent** - Multi-step tasks with full tool access
- **Explore Agent** - Fast, read-only codebase exploration
- **Custom Agents** - User-defined specialized agents

## Core Capabilities

### File Operations
- **Read** - Access any file in the project
- **Write** - Create new files and overwrite existing ones
- **Edit** - Make precise string replacements
- **Glob** - Pattern-based file searching
- **Grep** - Content searching across files

### System Operations
- **Bash** - Execute shell commands
- **Git Operations** - Version control workflows
- **Package Management** - npm, yarn, bun, etc.

### AI-Powered Features
- **Code Analysis** - Understand existing codebases
- **Feature Implementation** - Add new functionality
- **Refactoring** - Improve code structure
- **Debugging** - Identify and fix issues
- **Documentation** - Generate and maintain docs

### Integration & Extensibility
- **75+ LLM Providers** - OpenAI, Anthropic, local models, etc.
- **MCP Servers** - Model Context Protocol integrations
- **LSP Support** - 40+ language servers
- **Plugin System** - Custom extensions
- **Agent Skills** - Reusable behavior patterns
- **Custom Tools** - User-defined functionality

### Configuration Options
- **JSON Config** - `opencode.json` settings
- **Markdown Agents** - `.md` file definitions
- **Permissions** - Fine-grained access control
- **Themes** - UI customization
- **Keybindings** - Custom shortcuts

### Session Management
- **Persistent Storage** - SQLite-based conversation history
- **Session Sharing** - Collaborative workflows
- **Multi-agent Orchestration** - Coordinated agent tasks
- **Context Compaction** - Efficient token usage

## Usage Patterns

### Development Workflow
1. **Initialize** project with `/init`
2. **Plan** using Tab key for analysis mode
3. **Implement** with Build agent
4. **Review** changes and iterate

### Agent Switching
- **Tab Key** - Cycle through primary agents
- **@ Mention** - Invoke subagents directly
- **Session Navigation** - Multi-agent coordination

### Security & Privacy
- **Local Models** - Complete data privacy
- **Permission System** - Controlled tool access
- **Enterprise Features** - Team management

## Platform Support
- **Terminal** - Native TUI interface
- **Desktop App** - Cross-platform application
- **IDE Extensions** - Editor integrations
- **Web Interface** - Browser-based access
- **API/SDK** - Programmatic control