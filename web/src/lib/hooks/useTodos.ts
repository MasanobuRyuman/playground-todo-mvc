import { useState, useCallback } from "react";
import { Todo } from "../../types/todo";
import { todoApi } from "../api/todoApi";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = useCallback(async () => {
    const data = await todoApi.getAll();
    setTodos(data);
  }, []);

  const addTodo = useCallback(async (title: string) => {
    const todo = await todoApi.create({ title });
    setTodos((prev) => [...prev, todo]);
  }, []);

  const toggleTodo = useCallback(async (todo: Todo) => {
    const updatedTodo = await todoApi.update(todo.id, {
      completed: !todo.completed,
    });
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updatedTodo : t)));
  }, []);

  const deleteTodo = useCallback(async (id: number) => {
    await todoApi.delete(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return {
    todos,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
