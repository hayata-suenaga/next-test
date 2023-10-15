import prisma from "@/app/db";

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
  return <h1>Home</h1>;
}
