import prisma from "@/db";

async function toggleTodoItem(id: string, complete: boolean) {
  "use server";
}

export default async function Home() {
  return (
    <>
      <section>
        <h2>Reports on hold</h2>
      </section>
      <section>
        <h2>Assigned budget and remaining balance</h2>
      </section>
      <section>Spend by category</section>
    </>
  );
}
