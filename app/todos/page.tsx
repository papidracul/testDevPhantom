import { TodosDataTable } from "@/components/todoDataTable/data-table";
import { todosColumns } from "@/components/todoDataTable/todosColumns";
import { getTodos } from "@/services/todo";
const Todos = async () => {
  const todos = await getTodos();

  return (
    <section className="px-[20px]">
      <h2 className=" text-[26px] mt-[90px]">Influenceurs</h2>
      <TodosDataTable data={todos} columns={todosColumns} />
    </section>
  );
};

export default Todos;
