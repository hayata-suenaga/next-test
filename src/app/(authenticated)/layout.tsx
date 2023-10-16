import SessionProvider from "@/components/SessionProvider";
import Shell from "@/components/Shell";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("api/auth/signin");
  }

  return (
    <SessionProvider session={session}>
      <Shell>{children}</Shell>
    </SessionProvider>
  );
}
