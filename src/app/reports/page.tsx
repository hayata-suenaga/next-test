import prisma from "@/db";

async function getAllReports(userId: string) {
  return await prisma.report.findMany({
    where: {
      authorId: userId,
    },
  });
}

export default async function Reports(userId: string) {
  const reports = await getAllReports(userId);
  return <h1>Hello</h1>;
}
