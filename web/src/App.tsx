import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./lib/hooks/useTodos";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Todo MVC
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
