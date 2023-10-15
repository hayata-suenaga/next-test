import Link from "next/link";
import prisma from "@/app/db";
import TodoItem from "@/components/TodoItem";

async function toggleTodoItem(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete,
    },
  });
}

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex justify-between mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodoItem={toggleTodoItem} />
        ))}
      </ul>
    </>
  );
}
