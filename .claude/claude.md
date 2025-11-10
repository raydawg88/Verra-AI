# Claude Code Project Rules

## Development Server Management

**Rule: The live-reload server is always running. DO NOT restart it after file changes.**

This project uses `live-server` which automatically:
- Watches for file changes
- Auto-refreshes the browser when files are modified
- No manual refresh or server restart needed

## Server Details
- **Command**: `npx live-server --port=8000 --no-browser`
- **URL**: http://localhost:8000/mira-dashboard.html
- **Port**: 8000
- **Auto-reload**: Enabled by default

## Important Notes
- The server is started once at the beginning of the session
- DO NOT kill and restart the server after making changes
- File changes are automatically detected and browser refreshes automatically
- Only restart the server if it crashes or you need to change server configuration
