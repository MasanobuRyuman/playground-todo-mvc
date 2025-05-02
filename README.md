# Todo MVC

A simple implementation of Todo MVC application. This project is designed to be used for testing Coding Agent and MCP (Model-Code-Prompt) capabilities.

## Technology Stack

### Backend

- Hono (TypeScript)
- Node.js

### Frontend

- React
- TypeScript
- Vite

## Development Environment Setup

### Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd todo-mvc
```

2. Start the application:

```bash
docker-compose up --build
```

3. Access in browser:

- Frontend: http://localhost:3000
- API: http://localhost:8000

## API Endpoints

- `GET /todos` - Get all todos
- `GET /todos/:id` - Get a specific todo
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

## Development

### Directory Structure

```
todo-mvc/
├── api/           # Backend API
│   ├── src/
│   └── ...
├── web/           # Frontend
│   ├── src/
│   └── ...
└── docker-compose.yml
```
