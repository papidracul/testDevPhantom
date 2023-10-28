import { getTodo } from "@/services/todo";
import { UUID } from "crypto";

const Todo = async ({ params }: { params: { todoId: UUID } }) => {
  let { todoId } = params;
  const todo = await getTodo(todoId);
  console.log("🚀 ~ file: page.tsx:7 ~ Todo ~ todo:", todo);
  return <section>todo titre: {todo.title}</section>;
};

export default Todo;
