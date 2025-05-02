import { Context } from "hono";
import { todoModel, CreateTodoInput, UpdateTodoInput } from "../models/Todo";

export class TodoController {
  async getAll(c: Context) {
    const todos = todoModel.findAll();
    return c.json(todos);
  }

  async getById(c: Context) {
    const id = parseInt(c.req.param("id"));
    const todo = todoModel.findById(id);

    if (!todo) {
      return c.json({ error: "Todo not found" }, 404);
    }

    return c.json(todo);
  }

  async create(c: Context) {
    try {
      const { title } = await c.req.json<CreateTodoInput>();

      if (!title) {
        return c.json({ error: "Title is required" }, 400);
      }

      const todo = todoModel.create({ title });
      return c.json(todo, 201);
    } catch (error) {
      return c.json({ error: "Invalid request body" }, 400);
    }
  }

  async update(c: Context) {
    try {
      const id = parseInt(c.req.param("id"));
      const updates = await c.req.json<UpdateTodoInput>();

      const updatedTodo = todoModel.update(id, updates);

      if (!updatedTodo) {
        return c.json({ error: "Todo not found" }, 404);
      }

      return c.json(updatedTodo);
    } catch (error) {
      return c.json({ error: "Invalid request body" }, 400);
    }
  }

  async delete(c: Context) {
    const id = parseInt(c.req.param("id"));
    const success = todoModel.delete(id);

    if (!success) {
      return c.json({ error: "Todo not found" }, 404);
    }

    return c.json({ success: true });
  }
}
