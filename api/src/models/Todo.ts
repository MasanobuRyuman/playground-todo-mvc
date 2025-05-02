export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface CreateTodoInput {
  title: string;
}

export interface UpdateTodoInput {
  title?: string;
  completed?: boolean;
}

// インメモリデータストア
class TodoModel {
  private todos: Todo[] = [];
  private nextId = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  create(input: CreateTodoInput): Todo {
    const todo: Todo = {
      id: this.nextId++,
      title: input.title,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  update(id: number, input: UpdateTodoInput): Todo | undefined {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return undefined;

    this.todos[index] = {
      ...this.todos[index],
      ...input,
    };
    return this.todos[index];
  }

  delete(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return false;

    this.todos.splice(index, 1);
    return true;
  }
}

export const todoModel = new TodoModel();
