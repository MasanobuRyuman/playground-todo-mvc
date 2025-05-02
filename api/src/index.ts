import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import todoRoutes from "./routes/todoRoutes";

const app = new Hono();

// CORSミドルウェアを設定
app.use("/*", cors());

// Todoルートをマウント
app.route("/todos", todoRoutes);

// サーバー起動
const port = 8000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
