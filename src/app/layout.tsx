import Shell from "@/components/Shell";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDo App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} bg-white`}>
        <SessionProvider session={session}>
          <Shell>{children}</Shell>
        </SessionProvider>
      </body>
    </html>
  );
}
