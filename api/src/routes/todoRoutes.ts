import { Hono } from "hono";
import { TodoController } from "../controllers/TodoController";

const todoController = new TodoController();
const todoRoutes = new Hono();

// GET /todos - 全件取得
todoRoutes.get("/", (c) => todoController.getAll(c));

// GET /todos/:id - 単一取得
todoRoutes.get("/:id", (c) => todoController.getById(c));

// POST /todos - 新規作成
todoRoutes.post("/", (c) => todoController.create(c));

// PUT /todos/:id - 更新
todoRoutes.put("/:id", (c) => todoController.update(c));

// DELETE /todos/:id - 削除
todoRoutes.delete("/:id", (c) => todoController.delete(c));

export default todoRoutes;
